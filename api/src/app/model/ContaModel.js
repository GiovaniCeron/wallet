module.exports = (sequelize, DataType) => {
    const Conta = sequelize.define('Conta', {
        idconta: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        descricao: {
            type: DataType.STRING,
            allowNull: false
        },
        idtipoconta: {
            type: DataType.BIGINT,
            allowNull: false
        },
        valor: {
            type: DataType.DECIMAL,
            allowNull: false
        },
        idparcelado: {
            type: DataType.BOOLEAN,
            default: false,
            allowNull: false
        },
        dtcadastro: {
            type: DataType.DATE,
            allowNull: false
        },
        idusuario: {
            type: DataType.BIGINT,
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
        modelName: 'Teste',
        tableName: 'teste',
        timestamps: false
    });

    Conta.listar = () => {
        return Conta.findAll();
    }

    return Conta;
}


