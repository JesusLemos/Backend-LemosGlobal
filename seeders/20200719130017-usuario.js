'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('usuarios', [
    {
      "nombre":"Clara",
      "apellido":"Lemos",
      "num_telef":"123546",
      "contrasenia":"jesus",
      "correo":"clara@gmail.com",
      "rol":"Usuario"
    },
    {
      "nombre":"Manu",
      "apellido":"Lemos",
      "num_telef":"123546",
      "contrasenia":"jesus",
      "correo":"manu@gmail.com",
      "rol":"Usuario"
    },
    {
      "nombre":"Pepe",
      "apellido":"Lemos",
      "num_telef":"123546",
      "contrasenia":"jesus",
      "correo":"pepe@gmail.com",
      "rol":"Usuario"
    },
    {
      "nombre":"Jesus",
      "apellido":"Lemos",
      "num_telef":"123546",
      "contrasenia":"jesus",
      "correo":"jesus@gmail.com",
      "rol":"Usuario"
    }
    
    ]);


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
