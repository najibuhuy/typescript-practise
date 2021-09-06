"use strict";
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('mysql://najib:Najib_4718@127.0.0.1:3306/berlaba_test') // Example for postgres

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('berlaba_test', 'berlaba_test', '12345678', {
//   host: 'localhost',
//   dialect:  'mysql'
// });



  async function connectDB() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  connectDB()