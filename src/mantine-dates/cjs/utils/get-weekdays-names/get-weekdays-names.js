'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var getStartOfWeek = require('../get-start-of-week/get-start-of-week.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getWeekdaysNames(locale, firstDayOfWeek = "monday") {
  const names = [];
  const date = getStartOfWeek.getStartOfWeek(new Date(), firstDayOfWeek);
  for (let i = 0; i < 7; i += 1) {
    names.push(dayjs__default(date).locale(locale).format("dd"));
    date.setDate(date.getDate() + 1);
  }
  return names;
}

exports.getWeekdaysNames = getWeekdaysNames;
//# sourceMappingURL=get-weekdays-names.js.map
