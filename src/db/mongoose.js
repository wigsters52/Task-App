const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number, 
        validate(value){
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }, 
    email: {
        type: String, 
        required: true, 
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }

})

// const ryan = new User({
//     name: 'Ryan',
//     age: 30
// })

// ryan.save().then(() => {
//     console.log(ryan)
// }).catch((error) => {
//     console.log("error!", error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

const task1 = new Task({
    description: 'Take ted out for a walk',
    completed: false
})

task1.save().then(() => {
        console.log(task1)
    }).catch((error) => {
        console.log("error!", error)
    })