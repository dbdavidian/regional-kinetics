const path = require('path');
const express = require('express');
const app = express();

app
  .use(express.static(path.join(__dirname, 'build')))
  .use((_, res) => res.sendFile(path.join(__dirname, 'build/index.html')))
  .listen(5000, () => console.log('Started on http://localhost:5000'));