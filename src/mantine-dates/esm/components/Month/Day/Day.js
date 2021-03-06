import React, { forwardRef } from 'react';
import { getDayTabIndex } from './get-day-tab-index/get-day-tab-index.js';
import { getDayAutofocus } from './get-day-autofocus/get-day-autofocus.js';
import useStyles from './Day.styles.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const Day = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    value,
    selected,
    weekend,
    outside,
    onMouseEnter,
    classNames,
    styles,
    hasValue,
    firstInRange,
    lastInRange,
    __staticSelector = "Month",
    inRange,
    size,
    fullWidth,
    firstInMonth,
    focusable,
    hideOutsideDates
  } = _b, others = __objRest(_b, [
    "className",
    "value",
    "selected",
    "weekend",
    "outside",
    "onMouseEnter",
    "classNames",
    "styles",
    "hasValue",
    "firstInRange",
    "lastInRange",
    "__staticSelector",
    "inRange",
    "size",
    "fullWidth",
    "firstInMonth",
    "focusable",
    "hideOutsideDates"
  ]);
  const { classes, cx } = useStyles({ size, fullWidth, hideOutsideDates }, { classNames, styles, name: __staticSelector });
  return /* @__PURE__ */ React.createElement("button", __spreadProps(__spreadValues({}, others), {
    type: "button",
    ref,
    onMouseEnter: (event) => onMouseEnter(value, event),
    tabIndex: getDayTabIndex({ focusable, hasValue, selected, firstInMonth }),
    "data-autofocus": getDayAutofocus({ hasValue, selected, firstInMonth }),
    "data-mantine-stop-propagation": true,
    className: cx(classes.day, {
      [classes.outside]: outside,
      [classes.weekend]: weekend,
      [classes.selected]: selected,
      [classes.inRange]: inRange,
      [classes.firstInRange]: firstInRange,
      [classes.lastInRange]: lastInRange
    }, className)
  }), value.getDate());
});
Day.displayName = "@mantine/core/Day";

export { Day };
//# sourceMappingURL=Day.js.map
