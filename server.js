const express = require('express');

const PORT = 3002;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.get('/exec', (req, res) => {
  throw new Error('Exception occured!');
});

app.get('/slow_endpoint', (req, res) => {
  const n = 400;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j< n; j++) {
      console.log(`Iter ${i}.${j}`);
    }
  }
  res.send('Iterate');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}!`) });
