const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const result = { name: 'Thito', surename: 'Ribeiro', };
  return res.json(result);
});

app.post('/', (req, res) => {
  const name = req.body.name;
  const surename = req.body.surename;
  return res.json([name, surename]);
});



app.listen(port, () => console.log(`Listening on port ${port}!`));