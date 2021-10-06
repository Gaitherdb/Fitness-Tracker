const router = require('express').Router();
const path = require("path");
const { request } = require('express');
console.log(__dirname)

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });





module.exports = router;