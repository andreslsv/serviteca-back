'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pais extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //Propietario.belongsToMany(models.Role, { through:'Role_Propietario', foreignKey:'permisoId'});
        }
    }
    Pais.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'paises',
        modelName: 'Pais',
    });
    return Pais;
};