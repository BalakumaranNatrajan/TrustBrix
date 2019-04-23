const mongoose = require('mongoose');


const Home = new mongoose.Schema({
    bannerText: {
        type: String,
        required: true
    },
    bannerTitle: {
        type: String,
        required: true
    },
    bannerDescription: {
        type: String,
        required: true
    },
    bannerImgLink: {
        type: String,
        required: true
    },
    objectText: {
        type: String,
        required: true
    },
    propertyName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Efficiency: {
        type: String,
        required: true
    },
    Participants: {
        type: String,
        required: true
    },
    Completed: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    secondBannerText: {
        type: String,
        required: true
    },
    secondBannerImgLink: {
        type: String,
        required: true
    },
    secondBannerTitle1: {
        type: String,
        required: true
    },
    secondBannerTitle2: {
        type: String,
        required: true
    },
    secondBannerTitle3: {
        type: String,
        required: true
    },
    secondBannerTitle4: {
        type: String,
        required: true
    },
    secondBannerDes1: {
        type: String,
        required: true
    },
    secondBannerDes2: {
        type: String,
        required: true
    },
    secondBannerDes3: {
        type: String,
        required: true
    },
    secondBannerDes4: {
        type: String,
        required: true
    },
    blockchainBanner: {
        type: String,
        required: true
    },
    blockchainBannerImg: {
        type: String,
        required: true
    },
    blockchainBannerTitle1: {
        type: String,
        required: true
    },
    blockchainBannerTitle2: {
        type: String,
        required: true
    },
    blockchainBannerTitle3: {
        type: String,
        required: true
    },
    blockchainBannerTitle4: {
        type: String,
        required: true
    },
    blockchainBannerDes1: {
        type: String,
        required: true
    },
    blockchainBannerDes2: {
        type: String,
        required: true
    },
    blockchainBannerDes3: {
        type: String,
        required: true
    },
    blockchainBannerDes4: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('home', Home);
