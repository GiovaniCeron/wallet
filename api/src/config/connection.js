const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
let db = null;

const sequelize = new Sequelize(
	'postgres',
	'postgres',
	'xinforinfola',
	{
		host: 'localhost',
		dialect: 'postgres'
	}
);

db = {
	sequelize,
	Sequelize,
	entidades:{}
};

const diretorio = path.join(__dirname, "../app/model");
fs.readdirSync(diretorio).forEach(file =>{
	const entidadeDir = path.join(diretorio, file);
	const entidade = sequelize.import(entidadeDir);
	db.entidades[entidade.name] = entidade;
});

console.log(db.entidades)

module.exports = db;

