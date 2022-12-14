module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const auth = require("../middleware/FirebaseAuth.js")

    var router = require("express").Router();

    router.post("/", users.create);
 

    router.get("/:email",auth.checkAuth, users.findby_Email);

    router.put("/:email",auth.checkAuth, users.update);
 
    // router.delete("/:id_firebase", users.delete);

    app.use('/api/users', router);
  };