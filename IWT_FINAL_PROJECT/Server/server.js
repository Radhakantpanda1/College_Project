const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3009;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function startServer() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('InfinityZone');
        const queriesCollection = db.collection('queries');

        app.post('/submit-query', async (req, res) => {
            try {
                const query = {
                    name: req.body.nameq,
                    email: req.body.emailq,
                    message: req.body.messageq
                };
                console.log('Received query:', query);
                const result = await queriesCollection.insertOne(query);
                console.log('Query inserted with _id:', result.insertedId);
                res.status(200).send('Query received and stored.');
            } catch (error) {
                console.error('Error inserting query:', error);
                res.status(500).send('An error occurred.');
            }
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

startServer();