const Joi = require('joi');

const UserSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    mailId: Joi.string().email({ minDomainAtoms: 2 })
});

const BookSchema = Joi.object().keys({
    bookName: Joi.string().alphanum().min(3).max(30).required(),
    category: Joi.string().required(),
    bookNo: Joi.string().min(5).required(),
});

const userValidate = data => Joi.validate(data, UserSchema);
const bookValidate = data => Joi.validate(data, BookSchema);

module.exports = { userValidate, bookValidate };