const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const data = [
  { id: 1, name: "Mike", age: 22, company: "Nascetur Mus Company" },
  { id: 2, name: "Eleanor", age: 42, company: "Hendrerit Donec LLP" },
  { id: 3, name: "Dylan", age: 51, company: "Nisi Incorporated" },
  { id: 4, name: "Leila", age: 30, company: "Eros Non Limited" },
  { id: 5, name: "Jason", age: 31, company: "Accumsan Interdum Associates" },
];

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

app.put('/:identifier', (req,res) => {
  const identifier = req.params.identifier;
  return res.json([identifier]);
});



app.listen(port, () => console.log(`Listening on port ${port}!`));