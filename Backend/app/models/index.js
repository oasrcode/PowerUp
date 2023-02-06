const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
  },
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.exercise = require("./exercise.model.js")(sequelize, Sequelize);
db.user_logs = require("./user_logs.model")(sequelize, Sequelize);

db.users.hasMany(db.user_logs, {
  foreignKey: "firebase_id",
  allowNull: false,
});

db.exercise.hasMany(db.user_logs, {
  foreignKey: "exercise_id",
  allowNull: false,
});


db.user_logs.belongsTo(db.users, {foreignKey: 'firebase_id'   });

db.user_logs.belongsTo(db.exercise, { foreignKey: 'exercise_id'});



// db.exercise.findOne()
// .then(exercise => {
//   if (!exercise) {
//     const exercises = [
//       { exercise_id: 1, name: 'Press de banca' },
//       { exercise_id: 2, name: 'Sentadilla' },
//       { exercise_id: 3, name: 'Peso muerto' },
//     ];

//     db.exercise.bulkCreate(exercises)
//       .then(() => {
//         console.log('Data inserted successfully!');
//       })
//       .catch(error => {
//         console.error('Error inserting data:', error);
//       });
//   } else {
//     console.log('Data already exists, skipping insert.');
//   }
// })
// .catch(error => {
//   console.error('Error checking data:', error);
// });


module.exports = db;
