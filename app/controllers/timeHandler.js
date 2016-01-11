'use strict';

var config = require(process.cwd() + '/app/config');

function timeHandler() {
  this.getTime = function(req, res) {
    var unixTime = req.params.time,
        date = new Date(unixTime * 1000),
        year = date.getFullYear(),
        month = date.getMonth(),
        date = date.getDate();

    res.send({'unix': unixTime, 'natural': config.MONTHS_NAME[month] + ' ' + date + ', ' + year});
  };
}

module.exports = timeHandler;
