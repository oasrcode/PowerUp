module.exports = app => {
    const users_logs = require("../controllers/user_logs.controller");
    const auth = require("../middleware/FirebaseAuth.js")
  
    var router = require("express").Router();

    router.post("/",auth.checkAuth, users_logs.create);

    // router.get("/:exercise_id/:firebase_id/",auth.checkAuth, users_logs.findAllWeight);

    router.get("/last10/:exercise_id/:firebase_id/",auth.checkAuth, users_logs.findLast10);
 
    router.get("/max/:exercise_id/:firebase_id/",auth.checkAuth, users_logs.findMaxWeight);

    router.put("/:log_id",auth.checkAuth, users_logs.update);
 
    router.delete("/:log_id",auth.checkAuth, users_logs.delete);

    app.use('/api/user_logs', router);
  };