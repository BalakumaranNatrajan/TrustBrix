const _ = require('lodash');
const Partners = require('../../models/partners');
const { handleSuccess, handleFailure } = require('../../utils/ResponseHandler');
const { upload } = require('../../lib/multer');


/**
  * @method createPartner
  * @description To store the partners details
  */

const createPartner = async (req, res) => {
    const ducumentUpload = upload;
    ducumentUpload(req, res, next => {
        const fileObj = {
            logoLink: req.file.path
        }
        _.assign(req.body, fileObj);
        new Promise(async (resolve, reject) => {
            const partner = await new Partners(req.body);
            const result = await partner.save();
            if (!result) return reject(err)
            resolve(result)
        }).then(async result => {
            res.send(result);
        }).catch(err => console.log("err", err))
    })
}


/**
  * @method getPartners
  * @description To get all partners list
  */

const getPartners = async (req, res) => {
    const user = await Partners.find({});
    res.send(handleSuccess(user));
}

module.exports = { createPartner, getPartners }