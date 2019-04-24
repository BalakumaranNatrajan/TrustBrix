const _ = require('lodash');
const Joi = require('joi');
const Property = require('../../models/property');
const { handleSuccess, handleEmailSuccess, handleFailure } = require('../../utils/ResponseHandler');
const propertySchema = require('./schema/property.schema');
const { uploadImage } = require('../../lib/multer');

/**
  * @method addProperty
  * @description To get the details of user
  */

const addProperty = async (req, res) => {
    const ducumentUpload = uploadImage;
    ducumentUpload(req, res, next => {
        const isValid = propertySchema(req.body);
        if (isValid.error) {
            res.send(isValid.error);
        }
        const src = _.map(req.files, 'path');
        const fileObj = {
            images: src
        }
        _.assign(req.body, fileObj);
        console.log("coordinates", req.body);
        new Promise(async (resolve, reject) => {
            const property = await new Property(req.body);
            const result = await property.save();
            if (!result) return reject(err)
            resolve(result)
        }).then(async result => {
            res.send(result);
        }).catch(err => console.log("err", err))
    })
}


/**
  * @method getPropertyById
  * @description Change the password
  */

const getPropertyById = async (req, res) => {
    const getPropertySchema = Joi.object().keys({
        params: {
            id: Joi.string().required()
        }
    })
    const isValid = Joi.validate({ params: req.params }, getPropertySchema);
    if (isValid.error) {
        res.send(isValid.error);
    }
    const property = await Property.findOne({ _id: req.params.id });
    if (_.isEmpty(property)) {
        res.boom.notFound("Property not found...");
    }
    else {
        res.send(property);
    }
}


module.exports = { addProperty, getPropertyById }