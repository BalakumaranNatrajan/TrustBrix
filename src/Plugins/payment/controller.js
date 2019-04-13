const mollieClient = require('@mollie/api-client')({ apiKey: 'test_TV53MbxWTz8nN3F9xWTe2WTDkDanWN' });
const Joi = require('joi');
const paymentSchema = require('./schema/payment.schema');


/**
  * @method payAmount
  * @description To payment creation in mollie
  */
const payAmount = async (req, res) => {
    try {
        const isvalid = paymentSchema(req.body);
        if (isvalid.error) {
            res.send(isvalid.error);
        }
        const payment = await mollieClient.payments.create(req.body);
        res.send(payment);
    } catch (e) {
        res.send(e);
    }
}

/**
  * @method getPaymentById
  * @description To get a payment details by id
  */
const getPaymentById = async (req, res) => {
    const schema = Joi.object().keys({
        params: {
            id: Joi.string().required()
        }
    })
    const result = Joi.validate({ params: req.params }, schema);

    if (result.error) {
        res.send(result.error);
    }

    try {
        const payment = await mollieClient.payments.get(req.params.id);
        res.send(payment);
    } catch (e) {
        res.send(e);
    }
}

/**
  * @method getPaymentList
  * @description To get a payment list 
  */
const getPaymentList = async (req, res) => {
    try {
        const payments = await mollieClient.payments.all();
        res.send(payments);
    } catch (e) {
        res.send(e);
    }
}

/**
  * @method refund
  * @description To refund the amount 
  */
const refund = async (req, res) => {
    try {
        const refund = await mollieClient.payments_refunds.create({
            paymentId: req.body.paymentId,
            amount: {
                value: req.body.value,
                currency: req.body.currency,
            },
        });
        res.send(refund);
    } catch (e) {
        res.send(e);
    }
}


module.exports = { payAmount, getPaymentList, getPaymentById, refund }