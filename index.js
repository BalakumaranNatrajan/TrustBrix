const express = require('express');
const app = express();
const logger = require('morgan');
const debug = require('debug')('https');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const boom = require('express-boom');
const mongoose = require('mongoose');
const { settings } = require('./src/config/config.settings');
const protectedrouter = require('./src/Plugins');
const SWAGGER_DOCUMENT = YAML.load('./swagger.yml');
const router = require('./src/Plugins/auth/router');


require('colors');

app.use(boom());
app.use(logger('tiny'));
app.use(express.json());


app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SWAGGER_DOCUMENT));
const port = process.env.PORT || settings.listenPort;
app.listen(port, () => {
  console.log("Server running on port".cyan, port);
})



mongoose.connect('mongodb://localhost/TrustBrix', { useNewUrlParser: true }, (err) => {
  if (err) throw err
  console.log("Mongo db connected successfully".cyan);
});
mongoose.set('useCreateIndex', true);

app.use(router);
app.use(protectedrouter);