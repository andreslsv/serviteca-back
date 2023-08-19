'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('propietarios', [{
      nombre: 'Andrés Salas',
      tipoDocumento: 1,
      documento:"1090481240",
      telefono:"3118976896",
      email:"fasalasdsgn@gmail.com",
      direccion:"El Cairo 123",
      tipo:1
    }],{});
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
