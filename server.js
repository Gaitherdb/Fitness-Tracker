const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname , "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
