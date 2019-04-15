const express = require('express');
const router = express.Router();
const { LoginUser, RegUser } = require('./controller');
const upload = require('../../lib/multer');



router.post('/login', LoginUser);
router.post('/register', upload, RegUser);

module.exports = router;