const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const home = require('./routes/home');
const gallery = require('./routes/gallery');
const author = require('./routes/author');
var methodOverride = require('method-override')

const db = require('./models');
const Author = db.Author;
const Project = db.Project;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

app.set('view engine', '.hbs');

app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout:'main',
}))


app.use('/', home);
app.use('/gallery', gallery);
app.use('/author', author);

module.exports = app;
