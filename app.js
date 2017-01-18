const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const home = require('./routes/home');
const gallery = require('./routes/gallery');

const db = require('./models');
const Author = db.Author;
const Project = db.Project;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

// app.set('view engine', '.hbs');

// app.engine('.hbs', exphbs({
//   extname:'.hbs',
//   defaultLayout:'main',
// }))

app.use('/', home);
app.use('/gallery', gallery);


// app.post('/author', function (req, res) {
//   Author.create({ name: req.body.name })
//     .then(function (author) {
//       res.json(author);
//     });
// });

app.listen(3000, function() {
  console.log('Started connection on port 3000');
  db.sequelize.sync();
});

module.exports = app;