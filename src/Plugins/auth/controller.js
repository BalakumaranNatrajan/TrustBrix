const _ = require('lodash');
const User = require('../../models/user');
const { checkUser, generateToken } = require('../../lib/bcrypt');
const { handleSuccess, handleFailure } = require('../../utils/ResponseHandler');
const loginSchema = require('./schema/login.schema');
const registerSchema = require('../auth/schema/register.schema');


// const find = async (req, res, next) => {
//     console.log("resqq", req.body);
//     const userFound = await User.findOne({ email: req.body.email });
//     console.log("userFound", userFound);
//     if (!_.isEmpty(userFound)) {
//         res.send("Email aldready exists..");
//     }
//     return next();
// }

/**
  * @method RegUser
  * @description To store the user details
  */

const RegUser = async (req, res) => {
    const fileObj = {
        imageLink: req.file.path
    }
    const isValid = registerSchema(req.body);
    if (isValid.error) {
        res.send(isValid.error);
    }
    _.assign(req.body, fileObj);
    const userFound = await User.findOne({ email: req.body.email });
    if (!_.isEmpty(userFound)) {
        res.send(handleFailure("Email aldready exists.."));
    }
    const user = await new User(req.body);
    const result = await user.save();
    res.send(handleSuccess(result));
}


/**
  * @method LoginUser
  * @description Authenticate the user
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

module.exports = { LoginUser, RegUser }