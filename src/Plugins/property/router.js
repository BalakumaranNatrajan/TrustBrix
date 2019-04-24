const { addProperty, getPropertyById } = require('./controller');
const config = [
    {
        method: 'post',
        route: '/property',
        handler: addProperty
    },
    {
        method: 'get',
        route: '/property/:id',
        handler: getPropertyById
    }
]

module.exports = config;