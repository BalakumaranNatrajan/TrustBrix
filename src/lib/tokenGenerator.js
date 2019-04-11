var jwt = require('jsonwebtoken');

/**
  * @method generateToken
  * @description To generate a token if athentication is success
  * @param {any} userId The userId is a payload used to generate token
  * @returns {string} Returns the string as token
  */
const generateToken = async (userId)=> {
    const token = await jwt.sign({ id: userId }, 'secret123');
    return token;
}


/**
  * @method verifyToken
  * @description To verify the token for Autheraised user or not.
  * @param {any} token The userId is a payload used to generate token
  * @returns {string} Returns the string as Autheraised user or not
  */
const verifyToken = async (token)=> {
    const result = await jwt.decode(token);
    if(result === null)
        return 'Unautheraised user..'
    return result;
}

module.exports = { generateToken,verifyToken }