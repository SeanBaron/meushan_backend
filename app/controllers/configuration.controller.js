const db = require("../models");
const Configuration = db.configurations;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a DelivaryDay
    const configuration = new Configuration({
      name: req.body.name,
      value: req.body.value
    });
  
    // Save DelivaryDay in the database
    configuration
      .save(configuration)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the configuration."
        });
      });
  };

  exports.findAll = (req, res) => {
    Configuration.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving configurations."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Configuration.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Configuration with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Configuration with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Configuration.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Configuration with id=${id}. Maybe Configuration was not found!`
          });
        } else res.send({ message: "Configuration was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Configuration with id=" + id
        });
      });
  };