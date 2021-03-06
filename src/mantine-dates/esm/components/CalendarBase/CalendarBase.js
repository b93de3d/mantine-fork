import React, { forwardRef, useState, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { Box } from '@mantine/core';
import { YearPicker } from './YearPicker/YearPicker.js';
import { MonthPicker } from './MonthPicker/MonthPicker.js';
import { MonthsList } from './MonthsList/MonthsList.js';
import useStyles from './CalendarBase.styles.js';

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
const CalendarBase = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    classNames,
    styles,
    month,
    initialMonth,
    onMonthChange,
    locale,
    amountOfMonths = 1,
    size = "sm",
    allowLevelChange = true,
    initialLevel = "date",
    minDate,
    maxDate,
    __staticSelector = "CalendarBase",
    dayClassName,
    dayStyle,
    disableOutsideEvents,
    excludeDate,
    hideWeekdays,
    fullWidth,
    preventFocus,
    firstDayOfWeek = "monday",
    value,
    onChange,
    onDayMouseEnter,
    range,
    nextDecadeLabel,
    nextMonthLabel,
    nextYearLabel,
    previousDecadeLabel,
    previousMonthLabel,
    previousYearLabel,
    labelFormat = "MMMM YYYY",
    hideOutsideDates,
    isDateInRange,
    isDateFirstInRange,
    isDateLastInRange
  } = _b, others = __objRest(_b, [
    "className",
    "classNames",
    "styles",
    "month",
    "initialMonth",
    "onMonthChange",
    "locale",
    "amountOfMonths",
    "size",
    "allowLevelChange",
    "initialLevel",
    "minDate",
    "maxDate",
    "__staticSelector",
    "dayClassName",
    "dayStyle",
    "disableOutsideEvents",
    "excludeDate",
    "hideWeekdays",
    "fullWidth",
    "preventFocus",
    "firstDayOfWeek",
    "value",
    "onChange",
    "onDayMouseEnter",
    "range",
    "nextDecadeLabel",
    "nextMonthLabel",
    "nextYearLabel",
    "previousDecadeLabel",
    "previousMonthLabel",
    "previousYearLabel",
    "labelFormat",
    "hideOutsideDates",
    "isDateInRange",
    "isDateFirstInRange",
    "isDateLastInRange"
  ]);
  const [selectionState, setSelectionState] = useState(initialLevel);
  const { classes, cx, theme } = useStyles({ size, fullWidth, amountOfMonths: selectionState === "date" ? amountOfMonths : 1 }, { name: __staticSelector, styles, classNames });
  const finalLocale = locale || theme.datesLocale;
  const daysRefs = useRef(Array(amountOfMonths).fill(0).map(() => []));
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date
  });
  const [yearSelection, setYearSelection] = useState(_month.getFullYear());
  const minYear = minDate instanceof Date ? minDate.getFullYear() : 0;
  const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : 1e4;
  const handleDayKeyDown = (monthIndex, payload, event) => {
    var _a2;
    switch (event.code) {
      case "ArrowDown": {
        event.preventDefault();
        if (payload.rowIndex + 1 < daysRefs.current[monthIndex].length) {
          daysRefs.current[monthIndex][payload.rowIndex + 1][payload.cellIndex].focus();
        }
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (payload.rowIndex > 0) {
          daysRefs.current[monthIndex][payload.rowIndex - 1][payload.cellIndex].focus();
        }
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        if (payload.cellIndex !== 6) {
          daysRefs.current[monthIndex][payload.rowIndex][payload.cellIndex + 1].focus();
        } else if (monthIndex + 1 < amountOfMonths) {
          if (daysRefs.current[monthIndex + 1][payload.rowIndex]) {
            (_a2 = daysRefs.current[monthIndex + 1][payload.rowIndex][0]) == null ? void 0 : _a2.focus();
          }
        }
        break;
      }
      case "ArrowLeft": {
        event.preventDefault();
        if (payload.cellIndex !== 0) {
          daysRefs.current[monthIndex][payload.rowIndex][payload.cellIndex - 1].focus();
        } else if (monthIndex > 0) {
          if (daysRefs.current[monthIndex - 1][payload.rowIndex]) {
            daysRefs.current[monthIndex - 1][payload.rowIndex][6].focus();
          }
        }
      }
    }
  };
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.calendarBase, className),
    ref
  }, others), selectionState === "year" && /* @__PURE__ */ React.createElement(YearPicker, {
    size,
    value: yearSelection,
    minYear,
    maxYear,
    onChange: (year) => {
      setYearSelection(year);
      setSelectionState("month");
    },
    classNames,
    styles,
    __staticSelector,
    nextDecadeLabel,
    previousDecadeLabel,
    preventFocus
  }), selectionState === "month" && /* @__PURE__ */ React.createElement(MonthPicker, {
    size,
    value: { month: _month.getMonth(), year: _month.getFullYear() },
    year: yearSelection,
    onYearChange: setYearSelection,
    onNextLevel: () => setSelectionState("year"),
    locale: finalLocale,
    minDate,
    maxDate,
    onChange: (monthValue) => {
      setMonth(new Date(yearSelection, monthValue, 1));
      setSelectionState("date");
    },
    classNames,
    styles,
    __staticSelector,
    nextYearLabel,
    previousYearLabel,
    preventFocus
  }), selectionState === "date" && /* @__PURE__ */ React.createElement(MonthsList, {
    amountOfMonths,
    month: _month,
    locale: finalLocale,
    minDate,
    maxDate,
    allowLevelChange,
    size,
    daysRefs,
    onMonthChange: setMonth,
    onNextLevel: () => setSelectionState("month"),
    onDayKeyDown: handleDayKeyDown,
    classNames,
    styles,
    __staticSelector,
    dayClassName,
    dayStyle,
    disableOutsideEvents,
    excludeDate,
    hideWeekdays,
    fullWidth,
    preventFocus,
    firstDayOfWeek,
    value,
    range,
    onChange,
    nextMonthLabel,
    previousMonthLabel,
    labelFormat,
    onDayMouseEnter,
    hideOutsideDates,
    isDateInRange,
    isDateFirstInRange,
    isDateLastInRange
  }));
});
CalendarBase.displayName = "@mantine/dates/CalendarBase";

export { CalendarBase };
//# sourceMappingURL=CalendarBase.js.map
