'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehiculos', [
      {
        placa: 'ABC123',
        propietarioId:1,
        tipo:1,
        descripcion:"Descripción básica",
        anio:"2020",
        modeloId:1,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
