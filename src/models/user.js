const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { generateHash } = require('../lib/bcrypt');
const jwt = require('jsonwebtoken');

const User = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    userType: {
        type: String,
        required: true
    },
    tosAccepted: {
        type: Boolean,
        default: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    }
})

User.pre('save', function preSave(next) {
    const user = this

    if (!user.isModified('password')) {
        return next()
    }

    new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return reject(err)
            resolve(salt)
        })
    })
        .then(async salt => {
            const hash = await generateHash(user.password, salt);
            user.password = hash;
            next(null);
        })
        .catch(err => next(err))
})

User.methods.validatePassword = function validatePassword(password) {
    const user = this
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return reject(err)

            resolve(isMatch)
        })
    })
}

User.methods.generateToken = function generateToken() {
    const user = this

    return jwt.sign({ id: user.id }, config.token)
}

module.exports = mongoose.model('user', User);
