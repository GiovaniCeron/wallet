const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static load(sequelize) {
    super.init({
      idusuario: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nucpf: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dtcadastro: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuario',
      timestamps: false
    });
  }

}

module.exports = Usuario;





