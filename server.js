
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const saltRounds = 10;
const home = require('./routes/home');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override')
const gallery = require('./routes/gallery');
const user = require('./routes/user');
const login = require('./routes/login');
const CONFIG = require('./config/config.json');
const logout = require('./routes/logout');
const register = require('./routes/register');
const RedisStore = require('connect-redis')(session);

const db = require('./models');
const User = db.User;
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

const LocalStrategy = require('passport-local').Strategy;

const sess = {
  store: new RedisStore(),
  secret: CONFIG.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}

app.use(session(sess));

app.use(passport.initialize());

app.use(passport.session());


passport.use(new LocalStrategy((username, password, done) => {
  return User.findAll({
    where: {
      username: username,
    }
  })
  .then(user => {
    let userHashPassword = user[0].dataValues.password;

    bcrypt.compare(password, userHashPassword, (err, result) => {
      if (err) {
        console.log(err);
        return done(err);
      }

      if(result) {
        return done(null, user);
      } else {
        return done(null, false)
      }
    });
  })
  .catch( err => {
    return done(null, false)
  })

}));

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.use('/', home);
app.use('/gallery', gallery);
app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);



app.use(function(req, res) {
  res.render('templates/404');
});

app.get("*", (req,res) => {
  res.render('templates/404');
});

module.exports = app;

