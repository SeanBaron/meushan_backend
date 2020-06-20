// module.exports = app => {
//     const packageTypes = require("../controllers/packageType.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new packageTypes
//     router.post("/", packageTypes.create);
  
//     // Retrieve all packageTypes
//     router.get("/", packageTypes.findAll);
  
//     // Retrieve a single packageTypes with id
//     router.get("/:id", packageTypes.findOne);
  
//     // Update a packageTypes with id
//     router.put("/:id", packageTypes.update);
  
//     // Delete a packageTypes with id
//     router.delete("/:id", packageTypes.delete);
  
//     app.use('/api/packagetypes', router);
//   };