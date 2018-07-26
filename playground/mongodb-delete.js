// const MongoClient = require('mongodb').MongoClient; // destructure below

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many

    // db.collection('Todos').deleteMany({eat: "dinner"}).then((result) => {
    //     console.log(result);
    // })

    // delete one

    // db.collection('Todos').deleteOne({eat: "dinner"}).then((result) => {
    //     console.log(result);
    // })

    // find one and delete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Barry Thach'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b5a3c6d1c84c81ffca3b8e0')}).then((result) => {
        console.log(result);
    })

    // client.close();
});

