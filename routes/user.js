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
    User.create({ name: req.body.name})
    .then(function (user) {
      res.json(user);
    });
  })

module.exports = router;


