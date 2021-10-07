const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Array
      
      // {
      //   type: String,
      //   required: "Enter a name for type of exercise"
      // },
      // name: {
      //   type: String,
      //   required: "Enter a name for type of exercise"
      // },
      // duration: {
      //   type: Number,
      //   required: "Enter an amount of time"
      // },
      // distance: {
      //   type: Number,
      // },
      // weight: {
      //   type: Number,
      // },
      // reps: {
      //   type: Number,
      // },
      // sets: {
      //   type: Number,
      // }
    }
  ],


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;