const express = require('express');
const { readdirSync } = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

readdirSync(path.join(__dirname, '../app/router')).forEach(fileName => {
    const fullPath = path.join(__dirname, '../app/router', fileName);
    app.use(require(fullPath));
});

app.listen(3333);

module.exports = app;
