// import the sequelize constructor from the library
const { off } = require('process');
const Sequelize = require('sequelize');

// be sure to store password in a .env file
require('dotenv').config();

let sequelize;

// should be in the form of
// DB_NAME='inventory_db'
// DB_USER='root'
// DB_PW=''
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;