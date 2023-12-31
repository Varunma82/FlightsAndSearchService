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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Airbus A330',
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 777',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 727',
        capacity: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Bombardier CRJ',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Cessna 172',
        capacity:100,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
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
