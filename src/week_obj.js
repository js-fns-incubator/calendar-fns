var startOfWeek = require('date-fns/src/start_of_week');
var endOfWeek = require('date-fns/src/end_of_week');
var eachDay = require('date-fns/src/each_day');
var dayObj = require('./day_obj');

/**
 * @param {string|date} date
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var weekObj = function(date, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0;
  var start = startOfWeek(date, weekStartsAt);
  var end = endOfWeek(date, weekStartsAt);
  return eachDay(start, end).map(dayObj);
};

module.exports = weekObj;

