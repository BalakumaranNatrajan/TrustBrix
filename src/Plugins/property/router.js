const test = require('./controller');

const config = [
    {
        method: 'get',
        route: '/property',
        handler: test
    },
    {
        method: 'get',
        route: '/property-details',
        handler: test
    }
]

module.exports = config;