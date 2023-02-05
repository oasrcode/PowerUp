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
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

require("./app/routes/user.routes.js")(app);
require("./app/routes/user_logs.routes.js")(app);
// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 6127;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
