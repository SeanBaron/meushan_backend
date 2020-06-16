const db = require("../models");
const DeliveryDay = db.deliveryDays;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.text) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a DelivaryDay
    const deliveryDay = new DeliveryDay({
      text: req.body.text
      // value: req.body.value
    });
  
    // Save DelivaryDay in the database
    deliveryDay
      .save(deliveryDay)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the DeliveryDay."
        });
      });
  };

  exports.findAll = (req, res) => {
      
    DeliveryDay.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving DeliveryDays."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    DeliveryDay.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found DeliveryDay with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving DeliveryDay with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    DeliveryDay.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update DeliveryDay with id=${id}. Maybe DeliveryDay was not found!`
          });
        } else res.send({ message: "DeliveryDay was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating DeliveryDay with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    DeliveryDay.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete DeliveryDay with id=${id}. Maybe DeliveryDay was not found!`
          });
        } else {
          res.send({
            message: "DeliveryDay was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete DeliveryDay with id=" + id
        });
      });
  };