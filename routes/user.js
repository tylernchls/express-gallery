const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const saltRounds = 10;

router.route('/')
  .post((req,res) => {
    User.create({ username: req.body.username, password: req.body.password})
    .then(function (user) {
      res.redirect('/');
    });
  })

module.exports = router;


