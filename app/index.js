const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const result = { name: 'Thito', sobrenome: 'Ribeiro', };
  return res.json(result);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));