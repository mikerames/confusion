var mongoose = require('mongoose');

module.exports = mongoose.model('confusionApp', {
    text: {
        type: String,
        default: ''
    },
    text1: {
        type: String,
        default: ''
    }
});