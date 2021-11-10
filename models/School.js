const mongoose = require('mongoose');

const SchoolScheam = mongoose.Schema({
    name: {
        type: String,
        
    },
    age: {
        type: Number
    }
})

const school = mongoose.model("School", SchoolScheam);

module.exports = school