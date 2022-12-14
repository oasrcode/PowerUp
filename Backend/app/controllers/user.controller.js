const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {

    // Validate request
  if (!req.body.email || !req.body.name ) {
    res.status(400).send({
      message: "name or email can not be empty!"
    });
    return;
  } 
   // Create a User
   const user = {
    name: req.body.name,
    email: req.body.email,
  };

  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error creating user"
      });
    });


  
};


exports.findby_Email = (req, res) => {
  
  const email = req.params.email;

  console.log(email)

  Users.findOne({ where: { email: email } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error finding user with email=" + email
      });
    });
  
};


exports.update = (req, res) => {
  const email = req.params.email;

  Users.update(req.body,{ where: { email: email } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error finding user with email=" + email
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

