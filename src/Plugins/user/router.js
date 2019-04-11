const { RegUser, GetUser, LoginUser, ForgetPassword } = require('./controller');


const config = [
    {
        method: 'post',
        route: '/register',
        handler: RegUser
    },
    {
        method: 'post',
        route: '/login',
        handler: LoginUser
    },
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