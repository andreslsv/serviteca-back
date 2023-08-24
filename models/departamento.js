'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Departamento extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Departamento.hasMany(models.Ciudad, {
                foreignKey: 'departamentoId',
                //as: 'publicaciones'
            });
        }
    }
    Departamento.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
        paisId: DataTypes.INTEGER
    }, {
        sequelize,
        tableName: 'departamentos',
        modelName: 'Departamento',
    });
    return Departamento;
};