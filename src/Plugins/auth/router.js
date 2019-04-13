const express = require('express');
const router = express.Router();
const { LoginUser, RegUser } = require('./controller');


router.post('/login', LoginUser);
router.post('/register', RegUser);

module.exports = router;