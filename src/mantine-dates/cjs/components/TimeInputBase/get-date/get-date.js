'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getDate(hours, minutes, seconds, format, amPm) {
  const date = dayjs__default();
  let _hours = parseInt(hours, 10);
  const _minutes = parseInt(minutes, 10);
  const _seconds = parseInt(seconds, 10);
  if (Number.isNaN(_hours)) {
    _hours = 0;
  }
  if (format === "12") {
    _hours %= 12;
    if (amPm === "pm") {
      _hours += 12;
    }
  }
  return date.hour(_hours).minute(Number.isNaN(_minutes) ? 0 : _minutes).second(Number.isNaN(_seconds) ? 0 : _seconds).toDate();
}

exports.getDate = getDate;
//# sourceMappingURL=get-date.js.map
