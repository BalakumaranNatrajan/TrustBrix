const { GetUser, ForgetPassword } = require('./controller');


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
    }
]

module.exports = config;