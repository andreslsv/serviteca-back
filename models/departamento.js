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
            // define association here
            //Departamento.belongsToMany(models.Role, { through:'Role_Departamento', foreignKey:'permisoId'});
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