const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./models');

const Post = db.Post;


app.use(bodyParser.urlencoded({
  extended:true
}))

app.listen(3000, function() {
  db.sequelize.sync();
});