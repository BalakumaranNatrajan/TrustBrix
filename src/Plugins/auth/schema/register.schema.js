const Joi = require('joi');
const RegisterSchema = Joi.object().keys({
    // file: Joi.object().type(),
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    lastname: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    mobile: Joi.number().integer().required(),
    userType: Joi.string().required(),
});

const registerSchema = data => Joi.validate(data, RegisterSchema);

module.exports = registerSchema;