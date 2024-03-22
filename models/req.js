const mongoose = require('mongoose')

const webSchema = new mongoose.Schema({
    websiteurl:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('web', webSchema)