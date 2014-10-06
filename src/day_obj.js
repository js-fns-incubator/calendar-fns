var startOfDay = require('date-fns/src/start_of_day');
var endOfDay = require('date-fns/src/end_of_day');
var isToday = require('date-fns/src/is_today');
var isWeekend = require('date-fns/src/is_weekend');
var startOfMonth = require('date-fns/src/start_of_month');
var endOfMonth = require('date-fns/src/end_of_month');

/**
 * @param {date|string} dirtyDate
 * @returns {object}
 */
var dayObj = function(dirtyDate) {
  var date = startOfDay(dirtyDate);

  return {
    date: date,
    isToday: isToday(date),
    isWeekend: isWeekend(date),
    isFirstDayOfMonth: date.getTime() == startOfMonth(date).getTime(),
    isLastDayOfMonth: endOfDay(date).getTime() == endOfMonth(date).getTime()
  }
};

module.exports = dayObj;

