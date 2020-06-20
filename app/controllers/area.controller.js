const db = require("../models");
const Area = db.areas;
// const City = db.cities;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create an Area
    const area = new Area({
        name: req.body.name,
        deliveryFee: req.body.deliveryFee,
        cities: req.body.cities
    });

    // Save Area in the database
    area
        .save(area)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Area."
            });
        });
};

exports.findAll = (req, res) => {
    Area.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving areas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Area.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Area with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Area with id=" + id });
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Area.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Area with id=${id}. Maybe Area was not found!`
                });
            } else res.send({ message: "Area was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Area with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Area.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Area with id=${id}. Maybe Area was not found!`
          });
        } else {
          res.send({
            message: "Area was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Area with id=" + id
        });
      });
  };