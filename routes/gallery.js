const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;
const bodyParser = require('body-parser');

router.route('/:id')
  .get((req, res) => {
    Project.findAll({
      where: {
        id: req.params.id
      }
    })
      .then( project => {
        res.json(project);
      })
  })

// router.route('/gallery/new')
//   .get((req, res) => {
//     // render
//     })
//       .then( project => {
//         res.json(project);
//       })

router.route('/')
  .post((req,res) => {
    console.log('hello');
    Project.create({
      link: req.body.link,
      description: req.body.description
    })
    .then( project => {
      res.json(project);
    })
  })


module.exports = router;

