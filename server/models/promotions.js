var mongoose = require('mongoose');

module.exports = mongoose.model('promotions', {
    name: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
});