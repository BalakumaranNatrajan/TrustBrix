const passport = require('passport')
    , Strategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id, '-password')
        done(null, user)
    } catch (err) {
        done(err)
    }
})

passport.use('local', new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email })
        if (!user) { return done(null, false) }

        const isMatch = await user.validatePassword(password)
        if (!isMatch) { return done(null, false) }

        done(null, user)
    } catch (err) {
        return done(err)
    }
}))
