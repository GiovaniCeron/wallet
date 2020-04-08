const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(
	'postgres',
	'postgres',
	'xinforinfola',
	{
		host: 'localhost',
		dialect: 'postgres'
	}
);

const diretorio = path.join(__dirname, "../app/model");
fs.readdirSync(diretorio).forEach(file =>{
	const entidadeDir = path.join(diretorio, file);
	const entidade = sequelize.import(entidadeDir);
});

//console.log(sequelize);


module.exports = sequelize;

