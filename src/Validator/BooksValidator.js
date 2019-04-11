const Joi = require('joi');
 
const BookSchema = Joi.object().keys({
    bookName: Joi.string().alphanum().min(3).max(30).required(),
    category: Joi.string().required(),
    bookNo:Joi.string().min(5).required(),
});

const validate = data => Joi.validate(data,BookSchema);

module.exports = validate;