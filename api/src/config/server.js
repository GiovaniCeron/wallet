const express = require('express');
const { readdirSync } = require('fs');
const path = require('path');

const app = express();

require('dotenv');
require('./connection');

app.use(express.json());

readdirSync(path.join(__dirname, '../router')).forEach(fileName => {
    const fullPath = path.join(__dirname, '../router', fileName);
    app.use(require(fullPath));
});

module.exports = app;
