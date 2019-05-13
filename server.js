const express = require('express');

const PORT = 3002;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}!`) });
