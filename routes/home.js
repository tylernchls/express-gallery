const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;

router.route('/')
  .get((req, res) => {
    console.log('hello');
    Project.findAll()
      .then( project => {
        res.json(project);
      })
  })



module.exports = router;