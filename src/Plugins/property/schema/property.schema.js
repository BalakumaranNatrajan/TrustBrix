const Joi = require('joi');
const PropertySchema = Joi.object().keys({
    propertyName: Joi.string().required(),
    description: Joi.string().required(),
    owner: Joi.string().required(),
    propertyType: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    surface: Joi.number().required(),
    plot: Joi.number().required(),
    yearConstruction: Joi.number().required(),
    rooms: Joi.number().required(),
    bathrooms: Joi.number().required(),
    floors: Joi.number().required(),
    coordinates: Joi.array().required()
});

const registerSchema = data => Joi.validate(data, PropertySchema);

module.exports = registerSchema;