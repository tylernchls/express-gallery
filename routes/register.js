const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');

router.route('/')
  .get((req, res) => {
    res.render('templates/register');
  })



module.exports = router;