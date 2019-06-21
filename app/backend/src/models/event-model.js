// **** imports ****
const mongoose = require('mongoose');

// **** declare schema ****
const Schema = mongoose.Schema;

// **** setup schema ****
const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    dateList: [{
        type: Date,
        required: true
    }],
    location: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true,
        default: true
    },
    imagenURL: {
        type: String,
        required: true,
        trim: true
    }
});

// **** exports ****
module.exports = mongoose.model('Event', schema);