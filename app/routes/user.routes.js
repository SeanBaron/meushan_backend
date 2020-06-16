module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Authenticate user
  router.post("/authenticate", users.authenticate);

  // Retrieve all users
  router.get("/", users.getAll);

  app.use('/api/users', router);
};