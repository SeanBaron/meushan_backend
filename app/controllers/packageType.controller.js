const db = require("../models");
const PackageType = db.packageTypes;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.text || !req.body.value) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a DelivaryDay
    const packageType = new PackageType({
      text: req.body.text,
      value: req.body.value
    });
  
    // Save DelivaryDay in the database
    packageType
      .save(packageType)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the PackageType."
        });
      });
  };

  exports.findAll = (req, res) => {
      
    PackageType.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving PackageTypes."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    PackageType.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found PackageType with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving PackageType with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    PackageType.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update PackageType with id=${id}. Maybe PackageType was not found!`
          });
        } else res.send({ message: "PackageType was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating PackageType with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    PackageType.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete PackageType with id=${id}. Maybe PackageType was not found!`
          });
        } else {
          res.send({
            message: "PackageType was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete PackageType with id=" + id
        });
      });
  };