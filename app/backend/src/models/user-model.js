// **** imports ****
const mongoose = require('mongoose');

// **** declare schema ****
const Schema = mongoose.Schema;

// **** setup schema ****
const schema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true,
        }
    }
});

// **** exports ****
module.exports = mongoose.model('User', schema);