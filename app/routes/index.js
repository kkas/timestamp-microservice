'use strict';

var TimeHandler = require(process.cwd() + '/app/controllers/timeHandler.js');

module.exports = function (app) {
  var timeHandler = new TimeHandler();

  app.route('/:time')
    .get(timeHandler.getTime);
};
