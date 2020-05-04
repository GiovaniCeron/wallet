const { Model, DataTypes } = require('sequelize');

class TipoConta extends Model{
    static load(sequelize){
        TipoConta.init({
            idtipoconta: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pagar: {
                type: DataTypes.BOOLEAN,
                default: false,
                allowNull: false
            },
            receber: {
                type: DataTypes.BOOLEAN,
                default: false,
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
                default: false,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'TipoConta',
            tableName: 'tipo_conta',
            timestamps: false
        });
    }

}

module.exports = TipoConta;


