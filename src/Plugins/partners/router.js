const { createPartner, getPartners } = require('./controller');


const config = [
    {
        method: 'post',
        route: '/partners',
        handler: createPartner
    },
    {
        method: 'get',
        route: '/partners',
        handler: getPartners
    }
]

module.exports = config;