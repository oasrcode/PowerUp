module.exports = app => {
    const users_logs = require("../controllers/user_logs.controller");
  
    var router = require("express").Router();

    router.post("/", users_logs.create);

    router.get("/", users_logs.findAllWeight);
 
    router.get("/max/", users_logs.findMaxWeight);

    router.put("/", users_logs.update);
 
    router.delete("/:id_log", users_logs.delete);

    app.use('/api/user_logs', router);
  };