'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_Permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_Permiso.init({
    estado: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER,
    permisoId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'Role_Permisos',
    modelName: 'Role_Permiso',
  });
  return Role_Permiso;
};