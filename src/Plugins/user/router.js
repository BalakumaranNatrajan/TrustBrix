const { GetUser, ForgetPassword, sendMail } = require('./controller');


const config = [
    {
        method: 'get',
        route: '/get-user/:id',
        handler: GetUser
    },
    {
        method: 'post',
        route: '/forget-password/:id',
        handler: ForgetPassword
    },
    {
        method: 'get',
        route: '/send-mail/:email',
        handler: sendMail
    }
]

module.exports = config;