const path = require('path');
let dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.production')
  });
} else {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.development')
  });
}

let models = require('../models');
let sequelize = models.sequelize;

module.exports = { models };
