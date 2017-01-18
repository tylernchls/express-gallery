const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;
const bodyParser = require('body-parser');



router.route('/new')
  .get((req, res) => {
      res.render('templates/new')
    })

router.route('/:id')
  .get((req, res) => {
    Project.findAll({
      where: {
        id: req.params.id
      }
    })
      .then( project => {
        project = project[0].dataValues;
        res.render('templates/project', {project});
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
      project = project[0].dataValues;
        res.render('templates/project', {project});
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



router.route('/')
  .post((req,res) => {
    Project.create({
      link: req.body.link,
      description: req.body.description
    })
    .then( project => {
      console.log(project);
      res.redirect('/')
    })
  })

router.route('/:id/edit')
  .get((req,res) => {
    Project.findAll({
      where: {
        id: req.params.id
      }
    })
    .then( project => {
      project = project[0].dataValues;
      res.render('templates/edit', {project})
    })
  })



module.exports = router;

