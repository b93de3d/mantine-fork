import React from 'react';
import dayjs from 'dayjs';
import { formatMonthLabel } from './format-month-label/format-month-label.js';
import { isMonthInRange } from '../MonthPicker/is-month-in-range/is-month-in-range.js';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader.js';
import { Month } from '../../Month/Month.js';

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
  const nextMonth = dayjs(month).add(amountOfMonths, "months").toDate();
  const previousMonth = dayjs(month).subtract(1, "months").toDate();
  const months = Array(amountOfMonths).fill(0).map((_, index) => {
    const monthDate = dayjs(month).add(index, "months").toDate();
    return /* @__PURE__ */ React.createElement("div", {
      key: index
    }, /* @__PURE__ */ React.createElement(CalendarHeader, {
      hasNext: index + 1 === amountOfMonths && isMonthInRange({ date: nextMonth, minDate, maxDate }),
      hasPrevious: index === 0 && isMonthInRange({ date: previousMonth, minDate, maxDate }),
      label: formatMonthLabel({ month: monthDate, locale, format: labelFormat }),
      onNext: () => onMonthChange(dayjs(month).add(amountOfMonths, "months").toDate()),
      onPrevious: () => onMonthChange(dayjs(month).subtract(amountOfMonths, "months").toDate()),
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
    }), /* @__PURE__ */ React.createElement(Month, __spreadValues({
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, months);
}
MonthsList.displayName = "@mantine/dates/MonthsList";

export { MonthsList };
//# sourceMappingURL=MonthsList.js.map
