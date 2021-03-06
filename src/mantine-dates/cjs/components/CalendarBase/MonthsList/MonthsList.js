'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dayjs = require('dayjs');
var formatMonthLabel = require('./format-month-label/format-month-label.js');
var isMonthInRange = require('../MonthPicker/is-month-in-range/is-month-in-range.js');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var Month = require('../../Month/Month.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function MonthsList(_a) {
  var _b = _a, {
    amountOfMonths,
    month,
    locale,
    minDate,
    maxDate,
    allowLevelChange,
    size,
    daysRefs,
    onMonthChange,
    onNextLevel,
    onDayKeyDown,
    classNames,
    styles,
    __staticSelector = "MonthsList",
    nextMonthLabel,
    previousMonthLabel,
    labelFormat,
    preventFocus
  } = _b, others = __objRest(_b, [
    "amountOfMonths",
    "month",
    "locale",
    "minDate",
    "maxDate",
    "allowLevelChange",
    "size",
    "daysRefs",
    "onMonthChange",
    "onNextLevel",
    "onDayKeyDown",
    "classNames",
    "styles",
    "__staticSelector",
    "nextMonthLabel",
    "previousMonthLabel",
    "labelFormat",
    "preventFocus"
  ]);
  const nextMonth = dayjs__default(month).add(amountOfMonths, "months").toDate();
  const previousMonth = dayjs__default(month).subtract(1, "months").toDate();
  const months = Array(amountOfMonths).fill(0).map((_, index) => {
    const monthDate = dayjs__default(month).add(index, "months").toDate();
    return /* @__PURE__ */ React__default.createElement("div", {
      key: index
    }, /* @__PURE__ */ React__default.createElement(CalendarHeader.CalendarHeader, {
      hasNext: index + 1 === amountOfMonths && isMonthInRange.isMonthInRange({ date: nextMonth, minDate, maxDate }),
      hasPrevious: index === 0 && isMonthInRange.isMonthInRange({ date: previousMonth, minDate, maxDate }),
      label: formatMonthLabel.formatMonthLabel({ month: monthDate, locale, format: labelFormat }),
      onNext: () => onMonthChange(dayjs__default(month).add(amountOfMonths, "months").toDate()),
      onPrevious: () => onMonthChange(dayjs__default(month).subtract(amountOfMonths, "months").toDate()),
      onNextLevel,
      nextLevelDisabled: !allowLevelChange,
      size,
      classNames,
      styles,
      __staticSelector,
      nextLabel: nextMonthLabel,
      previousLabel: previousMonthLabel,
      preventLevelFocus: index > 0,
      preventFocus
    }), /* @__PURE__ */ React__default.createElement(Month.Month, __spreadValues({
      month: monthDate,
      daysRefs: daysRefs.current[index],
      onDayKeyDown: (...args) => onDayKeyDown(index, ...args),
      size,
      minDate,
      maxDate,
      classNames,
      styles,
      __staticSelector,
      locale,
      focusable: index === 0,
      preventFocus
    }, others)));
  });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, months);
}
MonthsList.displayName = "@mantine/dates/MonthsList";

exports.MonthsList = MonthsList;
//# sourceMappingURL=MonthsList.js.map
