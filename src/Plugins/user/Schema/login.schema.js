const Joi = require('joi');
const LoginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string(),
});

const loginSchema = data => Joi.validate(data, LoginSchema);

module.exports = loginSchema;