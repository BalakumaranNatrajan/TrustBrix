const multer = require('multer');
const path = require('path');

//Setup destination,filename and other properties of file
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
});

//will be using this for uploading a single file
const upload = multer({ storage: storage }).single('file');

module.exports = upload;