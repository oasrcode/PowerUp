const db = require("../models");
const User_Logs = db.user_logs;
const User = db.users;
const Exercise = db.exercise;
const Op = db.Sequelize.Op;
const sequelize = require("sequelize");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firebase_id || !req.body.exercise_id) {
    res.status(400).send({
      message: "user_id can not be empty!",
    });
    return;
  }

  const user_logs = {
    firebase_id: req.body.firebase_id,
    exercise_id: req.body.exercise_id,
    weight: req.body.weight,
    date: req.body.date,
  };

  User_Logs.create(user_logs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error creating user_log",
      });
    });
};

exports.findAllWeight = (req, res) => {
  const firebase_id = req.params.firebase_id;
  const exercise_id = req.params.exercise_id;

  User_Logs.findAll({
    where: { firebase_id: firebase_id, exercise_id: exercise_id },
    include: [{ model: Exercise }],
  }).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find user all weight with id_firebase=${id_firebase}.`,
      });
    }
  });
};

exports.findLast10 = (req, res) => {
  const firebase_id = req.params.firebase_id;
  const exercise_id = req.params.exercise_id;

  User_Logs.findAll({
    limit: 10,
    where: { firebase_id: firebase_id, exercise_id: exercise_id },
    order: [["date", "ASC"]],
    include: [{ model: Exercise }],
  }).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find user all weight with id_firebase=${id_firebase}.`,
      });
    }
  });
};

exports.findMaxWeight = (req, res) => {
  let firebase_id = req.params.firebase_id;
  let exercise_id = req.params.exercise_id;

  User_Logs.findAll({
    attributes: [[sequelize.fn("max", sequelize.col("weight")), "maxWeight"]],
    where: { firebase_id: firebase_id, exercise_id: exercise_id },
  }).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find user maxsquat with id_firebase=${id_firebase}.`,
      });
    }
  });
};

exports.update = (req, res) => {
  const log_id = req.params.log_id;

  console.log(req.body)

  User_Logs.update(req.body, { where: { log_id: req.params.log_id } })
    .then((data) => {
      if (data) {
       
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user_log with log_id=${log_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error finding user_log with log_id=" + log_id,
      });
    });
};

exports.delete = (req, res) => {
  const log_id = req.params.log_id;

  User_Logs.destroy({ where: { log_id: log_id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User_log was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete user with user_id=${user_id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user_logs with user_id=" + user_id,
      });
    });
};
