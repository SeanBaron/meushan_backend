module.exports = app => {
    const areas = require("../controllers/area.controller.js");
  
    var router = require("express").Router();
  
    // Create a new area
    router.post("/", areas.create);
  
    // Retrieve all areas
    router.get("/", areas.findAll);

    // Retrieve a single area with id
    router.get("/:id", areas.findOne);
  
    // Update an area with id
    router.put("/:id", areas.update);

    // Delete an area with id
    router.delete("/:id", areas.delete);

    app.use('/api/areas', router);
  };