const { Model, DataTypes } = require('sequelize');

class AlertaGastos extends Model{
    static load(sequelize){
        super.init({
            idalerta: {
                type: DataTypes.BIGINT,
                primaryKey: true
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tpalerta: {
                type: DataTypes.CHAR,
                default: 'M',
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
            modelName: 'AlertaGastos',
            tableName: 'alerta_gastos',
            timestamps: false
        });
    }

}

module.exports = AlertaGastos;


