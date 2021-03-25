const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const User = mongoose.model('User', {
    name: {
        type: String
    }, 
    age: {
        type: Number
    }
})

const ryan = new User({
    name: 'Ryan',
    age: 30
})

ryan.save().then(() => {
    console.log(ryan)
}).catch((error) => {
    console.log("error!", error)
})