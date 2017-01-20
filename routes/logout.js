const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');

router.route('/')
  .get((req, res) => {
    req.logout();
    res.redirect('/login');
  })

module.exports = router;