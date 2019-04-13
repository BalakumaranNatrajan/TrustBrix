const Joi = require('joi');
const paySchema = Joi.object().keys({
    amount: {
        currency: Joi.string().required(),
        value: Joi.number().required(),
    },
    description: Joi.string().required(),
    redirectUrl: Joi.string().required(),
    webhookUrl: Joi.string().required(),
    metadata: {
        order_id: Joi.string().required(),
    }
});

const paymentSchema = data => Joi.validate(data, paySchema);

module.exports = paymentSchema;