const { Model, DataTypes } = require('sequelize');

class Parcela extends Model{
    static load(sequelize){
        Parcela.init({
            idparcela: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            idconta: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            valor: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            dtvencimento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            pago: {
                type: DataTypes.BOOLEAN,
                default: false,
                allowNull: false
            },
            dtpagamento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            ativo: {
                type: DataTypes.BOOLEAN,
                default: false,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Parcela',
            tableName: 'parcela',
            timestamps: false
        });
    }

}

module.exports = Parcela;


