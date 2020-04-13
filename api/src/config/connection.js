const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
let models = {};
const connection = new Sequelize(
	'postgres',
	'postgres',
	'xinforinfola',
	{
		host: 'localhost',
		dialect: 'postgres'
	}
);

const diretorio = path.join(__dirname, '../app/model');
fs.readdirSync(diretorio).forEach(file => {
	const modelDir = path.join(diretorio, file);	
	const model = require(modelDir);
	model.load(connection);
	models[model.name] = model;
});

console.log(models);

module.exports = connection;

