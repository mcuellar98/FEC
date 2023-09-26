const express = require('express');
const path = require('path');
require('dotenv').config();
var compression = require('compression');


const app = express();

app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/favicon.ico', (req, res) => {
  res.end()
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);