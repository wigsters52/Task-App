const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    age: {
        type: Number, 
        default: 0,
        validate(value){
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }, 
    email: {
        type: String, 
        required: true, 
        trim: true, 
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String, 
        minLength: 7,
        validator(value){
            if(!validator.lowercase.contains('password')){
                throw new Error('Password is not allowed in your password')
            }
        }
    }

})

module.exports = User