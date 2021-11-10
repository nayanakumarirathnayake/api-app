const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    }
})

const student = mongoose.model('student', StudentSchema)

module.exports = student