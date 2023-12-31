'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name:'Jewar International Airport',
        cityId: 6,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Rajiv Gandhi International Airport',
        cityId: 10,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Begumpet Airport',
        cityId: 10,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Warangal Airport',
        cityId: 10,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Ramagundam Airport',
        cityId: 10,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
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
