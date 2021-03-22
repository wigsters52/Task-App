// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({name: 'Ryan', age: 30}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
        
    //     console.log(user)
    // })

    db.collection('tasks').findOne({_id: new ObjectID('6058e2271bb84e1a7875d755')}, (error, task) => {
        if(error) {
            return console.log('Unable to fetch')
        }
        
        console.log(task)
    })

    db.collection('tasks').find({ completed: true}).toArray((error, tasks) => {
        console.log(tasks)
    })
    
})
