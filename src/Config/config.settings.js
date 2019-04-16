const settings = {
    'baseUrl': process.env.baseUrl ? process.env.baseUrl : '/api',
    'PORT': process.env.PORT ? process.env.PORT : 4500,
    'mongoUrl': process.env.mongoUrl ? process.env.mongoUrl : 'mongodb://localhost/TrustBrix'
}

module.exports = { settings };