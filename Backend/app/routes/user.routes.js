module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const auth = require("../middleware/FirebaseAuth.js");

  var router = require("express").Router();

  router.post("/", users.create);

  router.get("/:firebase_id", auth.checkAuth, users.findby_FirebaseID);

  router.put("/:firebase_id", auth.checkAuth, users.update);

  // router.delete("/:id_firebase", users.delete);

  app.use("/api/users", router);
};
