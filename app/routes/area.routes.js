module.exports = app => {
    const areas = require("../controllers/area.controller.js");
  
    var router = require("express").Router();
  
    // Create a new configuration
    router.post("/", areas.create);
  
    // Retrieve all configurations
    router.get("/", areas.findAll);
  
    // Update a configurations with id
    router.put("/:id", areas.update);

    app.use('/api/areas', router);
  };