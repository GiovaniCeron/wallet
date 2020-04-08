module.exports = (sequelize, DataType) => {
    const Parcela = sequelize.define('Parcela', {
        idparcela: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        idconta: {
            type: DataType.BIGINT,
            allowNull: false
        },
        nuparcela: {
            type: DataType.INTEGER,
            allowNull: false
        },
        valor: {
            type: DataType.DECIMAL,
            allowNull: false
        },
        dtvencimento: {
            type: DataType.DATE,
            allowNull: false
        },
        idpago: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        },
        idusuariopag: {
            type: DataType.BIGINT,
            allowNull: false
        },
        dtpagamento: {
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
        modelName: 'Parcela',
        tableName: 'parcela',
        timestamps: false
    });

    Parcela.listar = () => {
        return Parcela.findAll();
    }

    return Parcela;
}


