const { Model, DataTypes } = require('sequelize');

class Conta extends Model{
    static load(sequelize){
        Conta.init({
            idconta: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            idtipoconta: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            valor: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            isparcelado: {
                type: DataTypes.BOOLEAN,
                default: false,
                allowNull: false
            },
            ismensal: {
                type: DataTypes.BOOLEAN,
                default: false,
                allowNull: false
            },
            dtcadastro: {
                type: DataTypes.DATE,
                allowNull: false
            },
            dtvencimento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            qtdparcelas: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            idusuario: {
                type: DataTypes.BIGINT,
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
            modelName: 'Conta',
            tableName: 'conta',
            timestamps: false
        });
    }

}

module.exports = Conta;


