'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getMonthsNames = require('../../../utils/get-months-names/get-months-names.js');
require('dayjs');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var isMonthInRange = require('./is-month-in-range/is-month-in-range.js');
var MonthPicker_styles = require('./MonthPicker.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function MonthPicker(_a) {
  var _b = _a, {
    className,
    styles,
    classNames,
    value,
    onChange,
    locale,
    year,
    onYearChange,
    onNextLevel,
    size,
    minDate,
    maxDate,
    __staticSelector = "MonthPicker",
    nextYearLabel,
    previousYearLabel,
    preventFocus
  } = _b, others = __objRest(_b, [
    "className",
    "styles",
    "classNames",
    "value",
    "onChange",
    "locale",
    "year",
    "onYearChange",
    "onNextLevel",
    "size",
    "minDate",
    "maxDate",
    "__staticSelector",
    "nextYearLabel",
    "previousYearLabel",
    "preventFocus"
  ]);
  const { classes, cx } = MonthPicker_styles['default']({ size }, { classNames, styles, name: __staticSelector });
  const range = getMonthsNames.getMonthsNames(locale);
  const minYear = minDate instanceof Date ? minDate.getFullYear() : void 0;
  const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : void 0;
  const months = range.map((month, index) => /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    key: month,
    onClick: () => onChange(index),
    className: cx(classes.monthPickerControl, {
      [classes.monthPickerControlActive]: index === value.month && year === value.year
    }),
    disabled: !isMonthInRange.isMonthInRange({ date: new Date(year, index), minDate, maxDate }),
    onMouseDown: (event) => preventFocus && event.preventDefault()
  }, month));
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx(classes.monthPicker, className)
  }, others), /* @__PURE__ */ React__default.createElement(CalendarHeader.CalendarHeader, {
    label: year.toString(),
    hasNext: typeof maxYear === "number" ? year < maxYear : true,
    hasPrevious: typeof minYear === "number" ? year > minYear : true,
    onNext: () => onYearChange(year + 1),
    onPrevious: () => onYearChange(year - 1),
    onNextLevel,
    size,
    classNames,
    styles,
    __staticSelector,
    nextLabel: nextYearLabel,
    previousLabel: previousYearLabel,
    preventFocus
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.monthPickerControls
  }, months));
}
MonthPicker.displayName = "@mantine/dates/MonthPicker";

exports.MonthPicker = MonthPicker;
//# sourceMappingURL=MonthPicker.js.map
