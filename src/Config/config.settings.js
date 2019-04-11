const Settings = {
    'listenPort': process.env.listenPort ? process.env.listenPort : 4500,
}

const MySqlConfig = {
    host: process.env.mySqlHost ? process.env.mySqlHost : 'localhost',
    user: process.env.mySqlUser ? process.env.mySqlUser : 'root',
    password: process.env.mySqlPassword ? process.env.mySqlPassword : 'root',
    database: process.env.mySqlDatabase ? process.env.mySqlDatabase : 'pets'
}

module.exports = { MySqlConfig, Settings };