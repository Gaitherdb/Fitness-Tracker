const router = require('express').Router();
const express = require('express');
const app = express();

const db = require("../../models");

//create workout
router.post("/", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//getLastWorkout
router.get("/", (req, res) => {
  db.Workout.aggregate([{
          $addFields: {
              _id: "$_id",
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

//getWorkoutsInRange
router.get("/range", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//add exercise
router.put("/:id", ({ params }, res) => {
  db.Workout.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      // $set: {
      //   read: true
      // }
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

//delete exercise
router.delete("/:id", (req, res) => {
  Workout.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

module.exports = router;