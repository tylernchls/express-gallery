const express = require('express');
const router = express.Router();
const db = require('../models');
const Author = db.Author;
const bodyParser = require('body-parser');

router.route('/')
  .get((req,res) => {
    Author.findAll()
    .then( author => {
      res.json(author);
    })
  })
  .post((req,res) => {
    Author.create({ name: req.body.name})
    .then(function (author) {
      res.json(author);
    });
  })



module.exports = router;