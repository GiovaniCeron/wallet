const { Model, DataTypes } = require('sequelize');

class Cofrinho extends Model {
  static load(sequelize) {
    super.init({
      idcofrinho: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      },
      valor_mensal: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      valor_guardado: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      valor_juros: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      valor_total: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      idusuario: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      dtcadastro: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      idusuario_cancel: {
        type: DataTypes.BIGINT
      },
      dtcancelado: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      modelName: 'Cofrinho',
      tableName: 'cofrinho',
      timestamps: false
    });
  }

}

module.exports = Cofrinho;


