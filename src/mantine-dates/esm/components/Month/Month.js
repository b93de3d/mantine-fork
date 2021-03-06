import React, { forwardRef } from 'react';
import { Text, Box } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
import { getMonthDays } from '../../utils/get-month-days/get-month-days.js';
import { getWeekdaysNames } from '../../utils/get-weekdays-names/get-weekdays-names.js';
import { isSameDate } from '../../utils/is-same-date/is-same-date.js';
import { Day } from './Day/Day.js';
import { getDayProps } from './get-day-props/get-day-props.js';
import useStyles from './Month.styles.js';

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
const no = () => false;
const Month = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    month,
    value,
    onChange,
    disableOutsideEvents = false,
    locale,
    dayClassName,
    dayStyle,
    classNames,
    styles,
    minDate,
    maxDate,
    excludeDate,
    onDayMouseEnter,
    range,
    hideWeekdays = false,
    __staticSelector = "Month",
    size = "sm",
    fullWidth = false,
    preventFocus = false,
    focusable = true,
    firstDayOfWeek = "monday",
    onDayKeyDown,
    daysRefs,
    hideOutsideDates = false,
    isDateInRange = no,
    isDateFirstInRange = no,
    isDateLastInRange = no
  } = _b, others = __objRest(_b, [
    "className",
    "month",
    "value",
    "onChange",
    "disableOutsideEvents",
    "locale",
    "dayClassName",
    "dayStyle",
    "classNames",
    "styles",
    "minDate",
    "maxDate",
    "excludeDate",
    "onDayMouseEnter",
    "range",
    "hideWeekdays",
    "__staticSelector",
    "size",
    "fullWidth",
    "preventFocus",
    "focusable",
    "firstDayOfWeek",
    "onDayKeyDown",
    "daysRefs",
    "hideOutsideDates",
    "isDateInRange",
    "isDateFirstInRange",
    "isDateLastInRange"
  ]);
  const { classes, cx, theme } = useStyles({ fullWidth }, { classNames, styles, name: __staticSelector });
  const finalLocale = locale || theme.datesLocale;
  const days = getMonthDays(month, firstDayOfWeek);
  const weekdays = getWeekdaysNames(finalLocale, firstDayOfWeek).map((weekday) => /* @__PURE__ */ React.createElement("th", {
    className: classes.weekdayCell,
    key: weekday
  }, /* @__PURE__ */ React.createElement(Text, {
    size,
    className: classes.weekday
  }, upperFirst(weekday))));
  const hasValue = value instanceof Date;
  const hasValueInMonthRange = hasValue && dayjs(value).isAfter(dayjs(month).startOf("month")) && dayjs(value).isBefore(dayjs(month).endOf("month"));
  const rows = days.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const dayProps = getDayProps({
        date,
        month,
        hasValue,
        minDate,
        maxDate,
        value,
        excludeDate,
        disableOutsideEvents,
        range
      });
      const onKeyDownPayload = { rowIndex, cellIndex, date };
      return /* @__PURE__ */ React.createElement("td", {
        className: classes.cell,
        key: cellIndex
      }, /* @__PURE__ */ React.createElement(Day, {
        ref: (button) => {
          if (daysRefs) {
            if (!Array.isArray(daysRefs[rowIndex])) {
              daysRefs[rowIndex] = [];
            }
            daysRefs[rowIndex][cellIndex] = button;
          }
        },
        onClick: () => typeof onChange === "function" && onChange(date),
        onMouseDown: (event) => preventFocus && event.preventDefault(),
        value: date,
        outside: dayProps.outside,
        weekend: dayProps.weekend,
        inRange: dayProps.inRange || isDateInRange(date, dayProps),
        firstInRange: dayProps.firstInRange || isDateFirstInRange(date, dayProps),
        lastInRange: dayProps.lastInRange || isDateLastInRange(date, dayProps),
        firstInMonth: hideOutsideDates ? isSameDate(date, dayjs(month).startOf("month").toDate()) : cellIndex === 0 && rowIndex === 0,
        selected: dayProps.selected || dayProps.selectedInRange,
        hasValue: hasValueInMonthRange,
        onKeyDown: (event) => typeof onDayKeyDown === "function" && onDayKeyDown(onKeyDownPayload, event),
        className: typeof dayClassName === "function" ? dayClassName(date, dayProps) : null,
        style: typeof dayStyle === "function" ? dayStyle(date, dayProps) : null,
        disabled: dayProps.disabled,
        onMouseEnter: typeof onDayMouseEnter === "function" ? onDayMouseEnter : no,
        size,
        fullWidth,
        focusable,
        hideOutsideDates,
        __staticSelector,
        styles,
        classNames
      }));
    });
    return /* @__PURE__ */ React.createElement("tr", {
      key: rowIndex
    }, cells);
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "table",
    className: cx(classes.month, className),
    ref
  }, others), !hideWeekdays && /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, weekdays)), /* @__PURE__ */ React.createElement("tbody", null, rows));
});
Month.displayName = "@mantine/dates/Month";

export { Month };
//# sourceMappingURL=Month.js.map
