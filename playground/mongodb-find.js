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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b5a475c77509fed57c8a468')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Users').find({name: 'Barry Thach'}).count().then((count) => {
    //     console.log(`Barry count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find Barry', err);
    // })

    db.collection('Users').find({name: 'Barry Thach'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

    // client.close();
});

