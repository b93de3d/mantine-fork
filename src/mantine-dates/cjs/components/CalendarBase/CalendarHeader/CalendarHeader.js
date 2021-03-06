'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var ArrowIcon = require('./ArrowIcon.js');
var CalendarHeader_styles = require('./CalendarHeader.styles.js');

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
const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28
};
function CalendarHeader(_a) {
  var _b = _a, {
    hasNext,
    hasPrevious,
    onNext,
    onPrevious,
    onNextLevel,
    className,
    label,
    nextLevelDisabled,
    size,
    classNames,
    styles,
    __staticSelector = "CalendarHeader",
    nextLabel,
    previousLabel,
    preventLevelFocus = false,
    preventFocus
  } = _b, others = __objRest(_b, [
    "hasNext",
    "hasPrevious",
    "onNext",
    "onPrevious",
    "onNextLevel",
    "className",
    "label",
    "nextLevelDisabled",
    "size",
    "classNames",
    "styles",
    "__staticSelector",
    "nextLabel",
    "previousLabel",
    "preventLevelFocus",
    "preventFocus"
  ]);
  const { classes, cx, theme } = CalendarHeader_styles['default']({ size }, { classNames, styles, name: __staticSelector });
  const iconSize = theme.fn.size({ size, sizes: iconSizes });
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx(classes.calendarHeader, className)
  }, others), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    className: classes.calendarHeaderControl,
    disabled: !hasPrevious,
    onClick: onPrevious,
    "aria-label": previousLabel,
    onMouseDown: (event) => preventFocus && event.preventDefault()
  }, /* @__PURE__ */ React__default.createElement(ArrowIcon.ArrowIcon, {
    direction: "left",
    width: iconSize,
    height: iconSize
  })), /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    className: classes.calendarHeaderLevel,
    disabled: nextLevelDisabled,
    onClick: onNextLevel,
    tabIndex: preventLevelFocus ? -1 : 0,
    onMouseDown: (event) => preventFocus && event.preventDefault()
  }, label, !nextLevelDisabled && /* @__PURE__ */ React__default.createElement(core.SelectChevronIcon, {
    error: false,
    size,
    className: classes.calendarHeaderLevelIcon
  })), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    className: classes.calendarHeaderControl,
    disabled: !hasNext,
    onClick: onNext,
    "aria-label": nextLabel,
    onMouseDown: (event) => preventFocus && event.preventDefault()
  }, /* @__PURE__ */ React__default.createElement(ArrowIcon.ArrowIcon, {
    direction: "right",
    width: iconSize,
    height: iconSize
  })));
}
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

exports.CalendarHeader = CalendarHeader;
//# sourceMappingURL=CalendarHeader.js.map
