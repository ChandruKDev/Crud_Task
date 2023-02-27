const mongoose  = require('mongoose')

var data = {
    name:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type :  String,
        required : true
    }
}

const exampleSchema = mongoose.Schema(data);

module.exports = mongoose.model('example',exampleSchema)