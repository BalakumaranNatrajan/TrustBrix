const _ = require('lodash');
const Joi = require('joi');
const User = require('../../models/user');
const { handleSuccess, handleEmailSuccess } = require('../../utils/ResponseHandler');
const sentEmail = require('../../lib/mailer');

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


/**
  * @method sendMail
  * @description sent a mail with reset password link..
  */

const sendMail = async (req, res) => {
    const email = req.params.email;
    const getUsersSchema = Joi.object().keys({
        params: {
            email: Joi.string().email().required()
        }
    })
    const isValid = Joi.validate({ params: req.params }, getUsersSchema);
    if (isValid.error) {
        res.send(isValid.error);
    }
    const user = await User.findOne({ email: req.params.email });
    if (_.isEmpty(user)) {
        res.boom.notFound("User not found...");
    }
    const data = {
        email: user.email,
        url: `http://localhost:3000/forget/?email=${email}`,
        name: user.firstname
    }
    const result = await sentEmail(data);
    if (result) {
        res.send(handleEmailSuccess());
    }
}

module.exports = { GetUser, ForgetPassword, sendMail }