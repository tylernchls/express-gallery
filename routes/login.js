const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');


router.route('/')
  .get((req, res) => {
    res.render('templates/login')
  })
  .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }))

module.exports = router;