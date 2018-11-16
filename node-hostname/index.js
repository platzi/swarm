const express = require('express')
const os = require('os');
const app = express();
const port = 3000;

const hostname = os.hostname();

app.get('/', (req, res) => {
  res.send(`Saludos desde ${hostname}!`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
