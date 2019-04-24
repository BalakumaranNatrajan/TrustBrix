const mongoose = require('mongoose');


const Property = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    city: {
        type: String,
        required: true
    },
    surface: {
        type: Number,
        required: true
    },
    plot: {
        type: Number,
        required: true
    },
    specific: {
        type: String,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
    yearConstruction: {
        type: Number,
        required: false,
    },
    rooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    floors: {
        type: Number,
        required: true
    },
    services: {
        type: String,
    },
    constructionType: {
        type: String,
    },
    usedArea: {
        type: Number
    },
    indoorSpaces: {
        type: Number
    },
    externalStorage: {
        type: Number
    },
    capacity: {
        type: Number
    },
    verfied: {
        type: Boolean
    },
    sold: {
        type: Number
    },
    yield: {
        type: Number
    },
    total: {
        type: Number
    },
    participant: {
        type: Number
    },
    completion: {
        type: Number
    }
})


module.exports = mongoose.model('property', Property);
