const _ = require('lodash');
const Joi = require('joi');
const User = require('../../models/user');
const { handleSuccess, handleFailure } = require('../../utils/ResponseHandler');


/**
  * @method GetUser
  * @description To get the details of user
  */

const GetUser = async (req, res) => {
    const getUsersSchema = Joi.object().keys({
        params: {
            id: Joi.string().alphanum().min(24).required()
        }
    })
    const result = Joi.validate({ params: req.params }, getUsersSchema);

    if (result.error) {
        res.send(result.error);
    }
    const user = await User.findById({ _id: req.params.id })
    if (_.isEmpty(user)) {
        res.boom.notFound("User not found...");
    }
    res.send(handleSuccess(user));
}

/**
  * @method ForgetPassword
  * @description Change the password
  */

const ForgetPassword = async (req, res) => {
    const getUsersSchema = Joi.object().keys({
        params: {
            id: Joi.string().alphanum().min(24).required()
        }
    })
    const isValid = Joi.validate({ params: req.params }, getUsersSchema);
    if (isValid.error) {
        res.send(isValid.error);
    }
    const user = await User.findById(req.params.id);
    if (_.isEmpty(user)) {
        res.boom.notFound("User not found...");
    }
    user.password = req.body.password;
    const result = await user.save();
    res.send(handleSuccess(result));
}


module.exports = { GetUser, ForgetPassword }