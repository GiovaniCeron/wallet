module.exports = (sequelize, DataType) => {
    const TipoConta = sequelize.define('TipoConta', {
        idtipoconta: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        descricao: {
            type: DataType.STRING,
            allowNull: false
        },
        pagar: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        },
        receber: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        },
        fixo: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        },
        idusuario: {
            type: DataType.BIGINT,
            allowNull: false
        },
        dtcadastro: {
            type: DataType.DATE,
            allowNull: false
        },
        ativo: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TipoConta',
        tableName: 'tipo_conta',
        timestamps: false
    });

    TipoConta.listar = () => {
        return TipoConta.findAll();
    }

    return TipoConta;
}


