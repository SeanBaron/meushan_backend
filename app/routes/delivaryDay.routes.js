module.exports = app => {
    const deliveryDays = require("../controllers/deliveryDay.controller.js");
  
    var router = require("express").Router();
  
    // Create a new DeliveryDay
    router.post("/", deliveryDays.create);
  
    // Retrieve all DeliveryDays
    router.get("/", deliveryDays.findAll);
  
    // Retrieve a single DeliveryDay with id
    router.get("/:id", deliveryDays.findOne);
  
    // Update a DeliveryDay with id
    router.put("/:id", deliveryDays.update);
  
    // Delete a DeliveryDay with id
    router.delete("/:id", deliveryDays.delete);
  
    app.use('/api/deliverydays', router);
  };