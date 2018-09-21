const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router');
const parser = require ('body-parser');


const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('travelInformation');
        const journeysCollection = db.collection('journeys');
        const journeysRouter = createRouter(journeysCollection);
        app.use('/api/journeys', journeysRouter);
    })
    .catch(console.err)

    app.listen(3000, function() {
    console.log(`listening on port ${this.address().port}`);

});