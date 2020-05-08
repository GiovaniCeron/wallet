const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
let models = {};
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

const diretorio = path.join(__dirname, '../model');
fs.readdirSync(diretorio).forEach(file => {
  const modelDir = path.join(diretorio, file);
  const model = require(modelDir);
  model.load(connection);
  models[model.name] = model;
});

console.log(models);

module.exports = connection;

