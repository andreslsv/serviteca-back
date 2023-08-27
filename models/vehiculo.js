'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Vehiculo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Vehiculo.belongsTo(models.Propietario, {
                foreignKey: 'propietarioId',
                //as: 'autor'
            });
            Vehiculo.belongsTo(models.Modelo, {
                foreignKey: 'modeloId',
                //as: 'autor'
            });
        }
    }
    Vehiculo.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        placa: DataTypes.STRING,
        anio: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        tipo:DataTypes.INTEGER,
        propietarioId:DataTypes.INTEGER,
        modeloId:DataTypes.INTEGER,
    }, {
        sequelize,
        tableName: 'vehiculos',
        modelName: 'Vehiculo',
    });
    return Vehiculo;
};