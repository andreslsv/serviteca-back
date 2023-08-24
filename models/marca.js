'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Marca extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Marca.hasMany(models.Modelo, {
                foreignKey: 'marcaId',
                //as: 'publicaciones'
            });
        }
    }
    Marca.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'marcas',
        modelName: 'Marca',
    });
    return Marca;
};