'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Modelo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Modelo.belongsTo(models.Marca, {
                foreignKey: 'marcaId',
                //as: 'autor'
            });
        }
    }
    Modelo.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'modelos',
        modelName: 'Modelo',
    });
    return Modelo;
};