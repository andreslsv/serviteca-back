'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ciudad extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Ciudad.belongsTo(models.Departamento, {
                foreignKey: 'departamentoId',
                //as: 'autor'
            });
        }
    }
    Ciudad.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'ciudades',
        modelName: 'Ciudad',
    });
    return Ciudad;
};