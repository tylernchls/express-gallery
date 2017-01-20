const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;
const bodyParser = require('body-parser');

router.route('/')
  .get((req,res) => {
    User.findAll()
    .then( user => {
      res.json(user);
    })
  })
  .post((req,res) => {
    User.create({ username: req.body.username, password: req.body.password})
    .then(function (user) {
      res.redirect('/');
    });
  })

module.exports = router;


