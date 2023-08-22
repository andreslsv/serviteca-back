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
            //Vehiculo.belongsToMany(models.Role, { through:'Role_Vehiculo', foreignKey:'permisoId'});
        }
    }
    Vehiculo.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        placa: DataTypes.STRING
    }, {
        sequelize,
        tableName: 'vehiculos',
        modelName: 'Vehiculo',
    });
    return Vehiculo;
};