const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


/**
  * @method generateHash
  * @description To generate a Hash value for corresponding user password
  * @param {any} password The password is given by user
  * @returns {string} Returns the hash value as a string
  */
async function generateHash(password, salt) {
  try {
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw err;
  };
}


/**
  * @method checkUser
  * @description To compare user password and responding user hash value from table
  * @param {string} password The password is given by user
  * @param {string} hash The hash is get by table for corresponding user
  * @returns {boolean} If valid password, return the boolean value true otherwise return false
  */
async function checkUser(password, hash) {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    throw err;
  }

}

/**
  * @method generateToken
  * @description To generate a token if athentication is success
  * @param {any} userId The userId is a payload used to generate token
  * @returns {string} Returns the string as token
  */
const generateToken = async (email) => {
  const token = await jwt.sign({ email: email }, 'secret123', { expiresIn: 60 * 60 });
  return token;
}


/**
* @method verifyToken
* @description To verify the token for Autheraised user or not.
* @param {any} token The userId is a payload used to generate token
* @returns {string} Returns the string as Autheraised user or not
*/
const verifyToken = async (token) => {
  const result = await jwt.decode(token);
  if (result === null)
    return 'Unautheraised user..'
  return result;
}

module.exports = { generateHash, checkUser, generateToken, verifyToken };