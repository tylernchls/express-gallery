const app = require('./server');
const db = require('./models');

app.listen(3000, function() {
  console.log('Started connection on port 3000');
  db.sequelize.sync();
});

