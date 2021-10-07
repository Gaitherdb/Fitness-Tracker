const router = require('express').Router();
const express = require('express');
const app = express();

const db = require("../../models");



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