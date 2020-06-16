const db = require("../models");
const Order = db.orders;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.phone || !req.body.area || !req.body.city || !req.body.address || !req.body.deliveryDate || !req.body.products || !req.body.isDelivered) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create an Order
    const order = new Order({
      name: req.body.name,
      phone: req.body.phone,
      area: req.body.area,
      city: req.body.city,
      address: req.body.address,
      deliveryDate: req.body.deliveryDate,
      // packageType: req.body.packageType,
      clientComments: req.body.clientComments,
      products: req.body.products,
      isDelivered: req.body.isDelivered
    });
  
    // Save order in the database
    order
      .save(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      });
  };

  exports.findAll = (req, res) => {
      
    Order.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Order."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Order.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Order with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Order with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Order with id=${id}. Maybe Order was not found!`
          });
        } else res.send({ message: "Order was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Order with id=" + id
        });
      });
  };