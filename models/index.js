var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  }
},
  {
    getterMethods: {
    route() {
      return '/wiki/' + this.urlTitle;
    }
  }
})

Page.hook('beforeValidate', function (page) {
  console.log(page.title);
  if (!page.title) {
    return Math.random().toString(36).substring(2, 7);
  }
  var spaces = /[' ']/g
  var nonAlphanumeric = /\W/g
  page.urlTitle = page.title.replace(spaces, '_').replace(nonAlphanumeric, '');
});


const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
