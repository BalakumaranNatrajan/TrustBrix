const _ = require('lodash');
const Home = require('../../models/home');
const { handleSuccess, handleFailure } = require('../../utils/ResponseHandler');
const { multiUpload } = require('../../lib/multer');


/**
  * @method createHomeDetails
  * @description To create trust brix home page details
  */

const createHomeDetails = async (req, res) => {
    const ducumentUpload = multiUpload;
    ducumentUpload(req, res, next => {
        const fileObj = {
            bannerImgLink: req.files.bannerImgLink[0].path,
            secondBannerImgLink: req.files.secondBannerImgLink[0].path,
            blockchainBannerImg: req.files.blockchainBannerImg[0].path
        }
        _.assign(req.body, fileObj);
        new Promise(async (resolve, reject) => {
            const details = await new Home(req.body);
            const result = await details.save();
            if (!result) return reject(result)
            resolve(result)
        }).then(async result => {
            res.send(result);
        }).catch(err => console.log("err", err))
    })
}


/**
  * @method getHomeDetails
  * @description To get homepage details
  */

const getHomeDetails = async (req, res) => {
    const details = await Home.find({});
    res.send(handleSuccess(details));
}

module.exports = { createHomeDetails, getHomeDetails }