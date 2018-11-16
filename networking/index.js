const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient
const db = 'test'

// Connection URL
const mongoUrl = process.env.MONGO_URL || `mongodb://localhost:27017/${db}`;

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      res.status(500).send(`💥 BOOM 💥: ${err}`);
    } else {
      client.db(db).collection('pings')
        .insert({ ip: req.ip, when: +new Date()}, (err, result) => {
          if (err) {
            res.send(`Error al escribir en la DB: ${err}`);
          } else{
            res.send('Me conecté a la DB y dejé constancia');
            client.close();
          }
        })
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
