const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;


router.route('/')
  .get((req, res) => {
    Project.findAll()
      .then( project => {
        console.log('req.user: ', req.user);
        res.render('templates/home', {project, user: req.user});
      })
  })



module.exports = router;