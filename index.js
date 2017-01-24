const app = require('./server');
const db = require('./models');

app.listen(3001, function() {
  console.log('Started connection on port 3001');
  db.sequelize.sync();
});

