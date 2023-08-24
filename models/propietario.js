'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propietario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Propietario.hasMany(models.Vehiculo, {
        foreignKey: 'propietarioId',
        //as: 'publicaciones'
      });
    }
  }
  Propietario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    tipoDocumento: DataTypes.INTEGER,
    documento: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    tipo: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'propietarios',
    modelName: 'Propietario',
  });
  return Propietario;
};