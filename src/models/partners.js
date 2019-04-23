const mongoose = require('mongoose');

const Partners = new mongoose.Schema({
    partnerTitle: {
        type: String,
        required: true
    },
    logoLink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    domainUrl: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('partners', Partners);
