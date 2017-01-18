const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;

router.route('/')
  .get((req, res) => {
    Project.findAll()
      .then( project => {
        res.render('templates/home', {project});
      })
  })



module.exports = router;