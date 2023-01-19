require('dotenv').config();
module.exports = {

  HOST: process.env.API_HOST,
  USER: process.env.API_USER,
  PASSWORD: process.env.API_PASSWORD,
  DB: process.env.API_DB,
  dialect: process.env.API_dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
