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
    allowNull: false,

  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
  {
    getterMethods: {
    route(){
      return '/wiki/' + this.getDataValue(this.urlTitle);
    }
  }
})
Page.hook('beforeValidate',generateTitle(Page.title));


const User = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

function generateTitle (title) {
  if (!title) {
    return Math.random().toString(36).substring(2, 7);
  }
  var spaces = /[' ']/g
  var nonAlphanumeric = /\W/g
  var url = title.replace(spaces, '_').replace(nonAlphanumeric, '');
  return url;
}

module.exports = {
  db,
  Page,
  User
}
