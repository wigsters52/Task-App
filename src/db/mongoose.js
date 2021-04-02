const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

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

// const ryan = new User({
//     name: 'TedSam',
//     age: 30,
//     email: 'ryan@ryan.com',
//     password: 'Buttfart'
// })

// ryan.save().then(() => {
//     console.log(ryan)
// }).catch((error) => {
//     console.log("error!", error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String, 
        required: true, 
        trim: true
    }, 
    completed: {
        type: Boolean,
        required: false,
        default: true
        
    }
})

const task1 = new Task({
    description: 'Go for a run',
    completed: false
})

task1.save().then(() => {
        console.log(task1)
    }).catch((error) => {
        console.log("error!", error)
    })