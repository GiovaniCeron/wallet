module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        idusuario: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        nome_usuario: {
            type: DataType.STRING,
            allowNull: false
        },
        nucpf: {
            type: DataType.INTEGER,
            allowNull: false
        },
        login: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: {
            type: DataType.STRING,
            allowNull: false
        },
        dtcadastro: {
            type: DataType.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuario',
        timestamps: false
    });

    Usuario.listar = () => {
        return Usuario.findAll();
    }

    return Usuario;
}




