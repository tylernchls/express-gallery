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
  .put((req, res) => {
    Project.update({
      link: req.body.link,
      description: req.body.description
    },{
      where: {
        id: req.params.id
      }
    })
    .then( project => {
        res.json('hello');
    })
  }) // close put
  .delete((req,res) => {
    Project.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( project => {
        res.json('hello');
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
    Project.create({
      link: req.body.link,
      description: req.body.description
    })
    .then( project => {
      res.json(project);
    })
  })

// router.route('/:id/edit')
//   .get((req,res) => {
//     //render hbs
//   })



module.exports = router;

