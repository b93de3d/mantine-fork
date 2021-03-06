'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dayjs = require('dayjs');
var isSameDate = require('../../utils/is-same-date/is-same-date.js');
var CalendarBase = require('../CalendarBase/CalendarBase.js');

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
const RangeCalendar = React.forwardRef((_a, ref) => {
  var _b = _a, {
    value,
    onChange,
    dayStyle,
    onMouseLeave,
    __staticSelector = "RangeCalendar",
    allowSingleDateInRange = false,
    amountOfMonths = 1
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "dayStyle",
    "onMouseLeave",
    "__staticSelector",
    "allowSingleDateInRange",
    "amountOfMonths"
  ]);
  const [hoveredDay, setHoveredDay] = React.useState(null);
  const [pickedDate, setPickedDate] = React.useState(null);
  const setRangeDate = (date) => {
    if (pickedDate instanceof Date) {
      if (isSameDate.isSameDate(date, pickedDate) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDay(null);
        return null;
      }
      const result = [date, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      onChange(result);
      setPickedDate(null);
      return null;
    }
    if (value[0] && isSameDate.isSameDate(date, value[0]) && !allowSingleDateInRange) {
      setPickedDate(null);
      setHoveredDay(null);
      onChange([null, null]);
      return null;
    }
    onChange([date, null]);
    setPickedDate(date);
    return null;
  };
  const handleMouseLeave = (event) => {
    typeof onMouseLeave === "function" && onMouseLeave(event);
    setHoveredDay(null);
  };
  const shouldHighlightDate = (date, modifiers) => {
    if (pickedDate instanceof Date && hoveredDay instanceof Date) {
      const result = [hoveredDay, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      return !modifiers.selected && dayjs__default(date).subtract(1, "day").isBefore(result[1]) && dayjs__default(date).add(1, "day").isAfter(result[0]);
    }
    return false;
  };
  const isPickedDateFirstInRange = (date, modifiers) => {
    if (pickedDate instanceof Date && hoveredDay instanceof Date) {
      const result = [hoveredDay, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      return modifiers.selected && dayjs__default(date).isBefore(result[1]);
    }
    return false;
  };
  const isPickedDateLastInRange = (date, modifiers) => {
    if (pickedDate instanceof Date && hoveredDay instanceof Date) {
      const result = [hoveredDay, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      return modifiers.selected && dayjs__default(date).isAfter(result[0]);
    }
    return false;
  };
  return /* @__PURE__ */ React__default.createElement(CalendarBase.CalendarBase, __spreadValues({
    dayStyle,
    onMouseLeave: handleMouseLeave,
    onDayMouseEnter: (date) => setHoveredDay(date),
    onChange: setRangeDate,
    value: pickedDate,
    range: value,
    ref,
    __staticSelector,
    amountOfMonths,
    hideOutsideDates: amountOfMonths > 1,
    isDateInRange: shouldHighlightDate,
    isDateFirstInRange: isPickedDateFirstInRange,
    isDateLastInRange: isPickedDateLastInRange
  }, others));
});
RangeCalendar.displayName = "@mantine/dates/RangeCalendar";

exports.RangeCalendar = RangeCalendar;
//# sourceMappingURL=RangeCalendar.js.map
