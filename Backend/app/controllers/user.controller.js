const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.name) {
    res.status(400).send({
      message: "name or email can not be empty!",
    });
    return;
  }
  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
    firebase_id: req.body.firebase_id,
    date: req.body.date,
    weight: req.body.weight,
    height: req.body.height,
  };

  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error creating user",
      });
    });
};

exports.findby_FirebaseID = (req, res) => {
  const firebase_id = req.params.firebase_id;

  Users.findOne({ where: { firebase_id: firebase_id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with firebase_id=${firebase_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error finding user with firebase_id=" + firebase_id,
      });
    });
};

exports.update = (req, res) => {
  const firebase_id = req.params.firebase_id;

  Users.update(req.body, { where: { firebase_id: firebase_id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with firebase_id=${firebase_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error finding user with firebase_id=" + firebase_id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id_firebase = req.params.id_firebase;

//   Users.destroy({
//     where: { id_firebase: id_firebase }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "User was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete user with id_firebase=${id_firebase}`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };
