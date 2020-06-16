module.exports = app => {
    const configurations = require("../controllers/configuration.controller.js");
  
    var router = require("express").Router();
  
    // Create a new configuration
    router.post("/", configurations.create);
  
    // Retrieve all configurations
    router.get("/", configurations.findAll);
  
    // Retrieve a single configuration with id
    router.get("/:id", configurations.findOne);

    // Update a configurations with id
    router.put("/:id", configurations.update);

    app.use('/api/configurations', router);
  };