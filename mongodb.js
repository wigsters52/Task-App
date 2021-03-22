// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Ryan',
    //     age: 30
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedCount)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Ut luctus tortor risus, ut. ', 
            completed: true
        }, {
            name: 'Sed luctus pretium massa, ac. ',
            completed: true
        }
        , {
            name: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            completed: false
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)
    })


})

