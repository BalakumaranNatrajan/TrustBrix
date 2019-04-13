const { payAmount, refund, getPaymentList, getPaymentById } = require('./controller');


const config = [
    {
        method: 'post',
        route: '/payment',
        handler: payAmount
    },
    {
        method: 'get',
        route: '/paymentList',
        handler: getPaymentList
    },
    {
        method: 'get',
        route: '/payment/:id',
        handler: getPaymentById
    },
    {
        method: 'post',
        route: '/refund',
        handler: refund
    }
]

module.exports = config;