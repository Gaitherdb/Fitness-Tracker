const router = require('express').Router();
const express = require('express');
const app = express();

const db = require("../../models");

//create workout
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//getLastWorkout
router.get("/", (req, res) => {
  db.Workout.aggregate([
    {
      $sort: { _id: 1 }
    },
    {
      $addFields: {
        day: "$day",
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    }

  ], (err, data) => {
    res.json(data);
  });
});



module.exports = router;