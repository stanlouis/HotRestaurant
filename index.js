const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

PORT = process.env.PORT || 7500;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`app listening on ${PORT}!`))