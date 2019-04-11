const _ = require('lodash');
const Joi = require('joi');
const User = require('../../models/user');
const { checkUser, generateToken } = require('../../lib/bcrypt');
const { handleSuccess, handleFailure } = require('../../utils/ResponseHandler');
const registerSchema = require('./Schema/register.schema');
const loginSchema = require('./Schema/login.schema');


/**
  * @method RegUser
  * @description To store the user details
  */

const RegUser = async (req, res) => {
    const isValid = registerSchema(req.body);
    if (isValid.error) {
        res.send(isValid.error);
    }
    const userFound = await User.findOne({ email: req.body.email });
    if (!_.isEmpty(userFound)) {
        res.send(handleFailure("Email aldready exists.."));
    }
    const user = await new User(req.body);
    const result = await user.save();
    res.send(handleSuccess(result));
}

/**
  * @method RegUser
  * @description To store the user details
  */

const LoginUser = async (req, res) => {
    const isValid = loginSchema(req.body);
    if (isValid.error) {
        res.send(isValid.error);
    }
    const user = await User.findOne({ email: req.body.email });
    if (_.isEmpty(user)) {
        res.boom.notFound("User not found");
    }
    const match = await checkUser(req.body.password, user.password);
    if (!match) {
        res.boom.unauthorized('Invalid password');
    }
    const token = await generateToken(user.email);
    const data = {
        token: token,
        user
    }
    res.send(handleSuccess(data));
}


/**
  * @method GetUser
  * @description To get the details of user
  */

const GetUser = async (req, res) => {
    const getUsersSchema = Joi.object().keys({
        params: {
            id: Joi.string().alphanum().min(24)
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
            id: Joi.string().alphanum().min(24)
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

module.exports = { RegUser, GetUser, LoginUser, ForgetPassword }