const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const public_folders = path.join(__dirname, '../public');
const port = process.env.PORT || 5000;
var app = express();

app.use(express.static(public_folders));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})