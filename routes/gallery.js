const express = require('express');
const router = express.Router();
const db = require('../models');
const Project = db.Project;
const bodyParser = require('body-parser');

const isObjEmpty = (req, res, next) => {
  if(Object.keys(req.body).length === 0) {
    res.redirect('gallery/new');
  } else {
    next()
  }
}

const isValidRoute = (req, res, next) => {
  Project.findAll({
    where: {
      id: req.params.id
    }
  })
  .then( project => {
    console.log(project);
    if(project.length !== 0){
      next();
    } else {
      res.render('templates/404')
    }
  })
  .catch( e => {
    res.render('templates/404');
  })
}

router.route('/new')
  .get(isValidRoute,(req, res) => {
      res.render('templates/new')
    })

router.route('/:id')
  .get(isValidRoute,(req, res) => {
    Project.findAll({
      where: {
        id: req.params.id
      }
    })
    .then( project => {
      project = project[0].dataValues;
      res.render('templates/project', {project});
    })
    .catch((err) => {
      console.log(err);
    })
  })
  .put(isValidRoute, isObjEmpty,(req, res) => {
    Project.update({
      link: req.body.link,
      description: req.body.description
    },{
      where: {
        id: req.params.id
      }
    })
    .then( project => {
        res.redirect(`/gallery/${req.params.id}`);
    })
    .catch((err) => {
      console.log(err.errors);
      res.json(err.errors[0].message);
    })
  })
  .delete(isValidRoute,(req,res) => {
    Project.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( project => {
        res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
  })


router.route('/')
  .post(isValidRoute,isObjEmpty, (req,res) => {
    Project.create({
      link: req.body.link,
      description: req.body.description,
      AuthorId: req.body.authorId
    })
    .then( project => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err);
    })
  })

router.route('/:id/edit')
  .get(isValidRoute,(req,res) => {
    Project.findAll({
      where: {
        id: req.params.id
      }
    })
    .then( project => {
      project = project[0].dataValues;
      res.render('templates/edit', {project})
    })
    .catch((err) => {
      console.log(err);
    })
  })

    router.route("*")
    .get((req,res) => {
      res.render('templates/404');
  });





module.exports = router;

