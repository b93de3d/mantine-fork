'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getDecadeRange = require('./get-decade-range/get-decade-range.js');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var YearPicker_styles = require('./YearPicker.styles.js');

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
function YearPicker(_a) {
  var _b = _a, {
    className,
    styles,
    classNames,
    value,
    onChange,
    size,
    minYear,
    maxYear,
    __staticSelector = "YearPicker",
    nextDecadeLabel,
    previousDecadeLabel,
    preventFocus
  } = _b, others = __objRest(_b, [
    "className",
    "styles",
    "classNames",
    "value",
    "onChange",
    "size",
    "minYear",
    "maxYear",
    "__staticSelector",
    "nextDecadeLabel",
    "previousDecadeLabel",
    "preventFocus"
  ]);
  const { classes, cx } = YearPicker_styles['default']({ size }, { classNames, styles, name: __staticSelector });
  const [decade, setDecade] = React.useState(value);
  const range = getDecadeRange.getDecadeRange(decade);
  const years = range.map((year) => /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    key: year,
    onClick: () => onChange(year),
    disabled: year < minYear || year > maxYear,
    onMouseDown: (event) => preventFocus && event.preventDefault(),
    className: cx(classes.yearPickerControl, {
      [classes.yearPickerControlActive]: year === value
    })
  }, year));
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx(classes.yearPicker, className)
  }, others), /* @__PURE__ */ React__default.createElement(CalendarHeader.CalendarHeader, {
    label: `${range[0]} \u2013 ${range[range.length - 1]}`,
    hasPrevious: typeof minYear === "number" ? minYear < range[0] : true,
    hasNext: typeof maxYear === "number" ? maxYear > range[range.length - 1] : true,
    onNext: () => setDecade((current) => current + 10),
    onPrevious: () => setDecade((current) => current - 10),
    nextLevelDisabled: true,
    size,
    nextLabel: nextDecadeLabel,
    previousLabel: previousDecadeLabel,
    styles,
    classNames,
    __staticSelector,
    preventFocus
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.yearPickerControls
  }, years));
}
YearPicker.displayName = "@mantine/dates/YearPicker";

exports.YearPicker = YearPicker;
//# sourceMappingURL=YearPicker.js.map
