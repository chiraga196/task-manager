const mongose = require('mongoose')
const validator = require('validator')

const Task = mongose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed : {
        type: Boolean,
        default: false
    }
})

module.exports = Task