const router = require('express').Router();

app.get("/exercise", (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html");
  });

  app.get("/stats", (req, res) => {
    res.sendFile(__dirname + "/public/stats.html");
  });





module.exports = router;