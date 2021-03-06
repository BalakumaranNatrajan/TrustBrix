const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const boom = require('express-boom');
const chalk = require('chalk')

const SWAGGER_DOCUMENT = YAML.load('./swagger.yml');
const router = require('./src/Plugins/auth/router');
const { settings } = require('./src/config/config.settings');
const protectedrouter = require('./src/Plugins');
const logger = require('./src/lib/winston');
require('colors');

app.use(boom());

app.use(express.static(__dirname + 'public'));

//Morgan configuration for loggers
app.use(morgan(function (tokens, req, res) {
  return [
    chalk.yellowBright(tokens.method(req, res)),
    chalk.whiteBright(tokens.url(req, res)),
    chalk.greenBright(tokens.status(req, res)),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));
app.use(morgan('combined', { "stream": logger.stream }));

// logger.info('Working dir:' + process.cwd())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Swagger file 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SWAGGER_DOCUMENT));

//Server creation
const port = process.env.PORT || settings.PORT;
app.listen(port, () => {
  console.log("Server running on port".cyan, port);
})

//MongoDb connnection configuration
const mongoUrl = settings.mongoUrl;
mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
  if (err) throw err
  console.log("Mongo db connected successfully".cyan);
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.use(router);
app.use(settings.baseUrl, protectedrouter);