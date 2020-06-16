module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create a new packageTypes
    router.post("/", orders.create);
  
    // Retrieve all packageTypes
    router.get("/", orders.findAll);
  
    // Retrieve a single packageTypes with id
    router.get("/:id", orders.findOne);

    // Update an Order with id
    router.put("/:id", orders.update);
  
    app.use('/api/orders', router);
  };