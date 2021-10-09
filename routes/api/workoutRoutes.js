const router = require('express').Router();
const express = require('express');
const app = express();

const db = require("../../models");

//create workout
router.post("/", (req, res) => {
  //create new instance of exercise field
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
    {//sort by asc id - newest/last
      $sort: { _id: 1 }
    },
    {
      $addFields: {
        //display the day field
        day: "$day",
        //create new field finding the sum of the durations of this workout's exercises
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
      //find the workout with the saved id stored in the parameter
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    },
    { 
      //create new instance of exercise field
      new: true
    },

    (error, edit) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edit);
        res.send(edit);
      }
    }
  );
});

//getWorkoutsInRange
router.get("/range", (req, res) => {
  db.Workout.aggregate([
    {
      //retrieves all field data in an array to use for graph
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