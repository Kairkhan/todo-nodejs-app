const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Task', Task)