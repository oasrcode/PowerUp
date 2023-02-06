const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./app/models");

const corsConf = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsConf));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
    db.exercise
      .findOne()
      .then((exercise) => {
        if (!exercise) {
          const exercises = [
            { exercise_id: 1, name: "Press de banca" },
            { exercise_id: 2, name: "Sentadilla" },
            { exercise_id: 3, name: "Peso muerto" },
          ];

          db.exercise
            .bulkCreate(exercises)
            .then(() => {
              console.log("Data inserted successfully!");
            })
            .catch((error) => {
              console.error("Error inserting data:", error);
            });
        } else {
          console.log("Data already exists, skipping insert.");
        }
      })
      .catch((error) => {
        console.error("Error checking data:", error);
      });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

require("./app/routes/user.routes.js")(app);
require("./app/routes/user_logs.routes.js")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(process.env.API_HOST);
});
