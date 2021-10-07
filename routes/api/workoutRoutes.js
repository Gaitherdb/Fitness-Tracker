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

//add exercise
router.put("/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    },
    { 
      new: true
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

//getWorkoutsInRange
router.get("/range", (req, res) => {
  db.Workout.aggregate([
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