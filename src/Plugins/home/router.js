const { createHomeDetails, getHomeDetails } = require('./controller');


const config = [
    {
        method: 'post',
        route: '/home-components',
        handler: createHomeDetails
    },
    {
        method: 'get',
        route: '/home-components',
        handler: getHomeDetails
    }
]

module.exports = config;