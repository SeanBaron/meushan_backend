module.exports = app => {
    const categories = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new configuration
    router.post("/", categories.create);
  
    // Retrieve all configurations
    router.get("/", categories.findAll);
  
    // Update a configurations with id
    router.put("/:id", categories.update);

    app.use('/api/categories', router);
  };