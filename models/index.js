var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
  },
  urlTitle: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})

const User = db.define('task', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  }
})

module.exports = {
  db
}
