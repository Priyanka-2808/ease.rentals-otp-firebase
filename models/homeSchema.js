const { default: mongoose } = require('mongoose');
const mongoosee = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
})

module.exports = mongoose.model('RegisterCustomer', userSchema )