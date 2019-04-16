const { GetUser, ForgetPassword, sendMail, updateUser } = require('./controller');


const config = [
    {
        method: 'get',
        route: '/get-user/:id',
        handler: GetUser
    },
    {
        method: 'post',
        route: '/forget-password/:email',
        handler: ForgetPassword
    },
    {
        method: 'get',
        route: '/send-mail/:email',
        handler: sendMail
    },
    {
        method: 'patch',
        route: '/update-user/:email',
        handler: updateUser
    }
]

module.exports = config;