import dayjs from 'dayjs';
import React, { forwardRef, useState, useRef } from 'react';
import { useUncontrolled, upperFirst, useMergedRef } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar.js';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase.js';

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
const validationRule = (val) => Array.isArray(val) && val.length === 2 && val.every((v) => v instanceof Date);
const isFirstDateSet = (val) => Array.isArray(val) && val.length === 2 && val[0] instanceof Date;
const DateRangePicker = forwardRef((_a, ref) => {
  var _b = _a, {
    value,
    onChange,
    defaultValue,
    classNames,
    styles,
    shadow = "sm",
    locale,
    inputFormat,
    transitionDuration = 200,
    transitionTimingFunction,
    nextMonthLabel,
    previousMonthLabel,
    closeCalendarOnChange = true,
    labelFormat = "MMMM YYYY",
    dayClassName,
    dayStyle,
    disableOutsideEvents,
    minDate,
    maxDate,
    excludeDate,
    initialMonth,
    initiallyOpened = false,
    size = "sm",
    dropdownType = "popover",
    labelSeparator = "\u2013",
    clearable = true,
    clearButtonLabel,
    firstDayOfWeek = "monday",
    allowSingleDateInRange = false,
    amountOfMonths = 1,
    withinPortal = true,
    initialLevel,
    onDropdownClose,
    onDropdownOpen,
    hideOutsideDates,
    hideWeekdays
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "defaultValue",
    "classNames",
    "styles",
    "shadow",
    "locale",
    "inputFormat",
    "transitionDuration",
    "transitionTimingFunction",
    "nextMonthLabel",
    "previousMonthLabel",
    "closeCalendarOnChange",
    "labelFormat",
    "dayClassName",
    "dayStyle",
    "disableOutsideEvents",
    "minDate",
    "maxDate",
    "excludeDate",
    "initialMonth",
    "initiallyOpened",
    "size",
    "dropdownType",
    "labelSeparator",
    "clearable",
    "clearButtonLabel",
    "firstDayOfWeek",
    "allowSingleDateInRange",
    "amountOfMonths",
    "withinPortal",
    "initialLevel",
    "onDropdownClose",
    "onDropdownOpen",
    "hideOutsideDates",
    "hideWeekdays"
  ]);
  const theme = useMantineTheme();
  const finalLocale = locale || theme.datesLocale;
  const dateFormat = inputFormat || theme.dateFormat;
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const calendarSize = size === "lg" || size === "xl" ? "md" : "sm";
  const inputRef = useRef();
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [null, null],
    onChange,
    rule: isFirstDateSet
  });
  const handleValueChange = (range) => {
    setValue(range);
    if (closeCalendarOnChange && validationRule(range)) {
      setDropdownOpened(false);
      onDropdownClose == null ? void 0 : onDropdownClose();
      window.setTimeout(() => {
        var _a2;
        return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      }, 0);
    }
  };
  const valueValid = validationRule(_value);
  const firstValueValid = isFirstDateSet(_value);
  const firstDateLabel = _value[0] ? upperFirst(dayjs(_value[0]).locale(finalLocale).format(dateFormat)) : "";
  const secondDateLabel = _value[1] ? upperFirst(dayjs(_value[1]).locale(finalLocale).format(dateFormat)) : "";
  const handleClear = () => {
    var _a2;
    setValue([null, null]);
    setDropdownOpened(true);
    onDropdownOpen == null ? void 0 : onDropdownOpen();
    (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
  };
  const handleDropdownToggle = (isOpened) => {
    if (!isOpened && firstValueValid && _value[1] === null) {
      handleClear();
    }
    setDropdownOpened(!dropdownOpened);
    !dropdownOpened ? onDropdownOpen == null ? void 0 : onDropdownOpen() : onDropdownClose == null ? void 0 : onDropdownClose();
  };
  return /* @__PURE__ */ React.createElement(DatePickerBase, __spreadValues({
    dropdownOpened,
    setDropdownOpened: handleDropdownToggle,
    shadow,
    transitionDuration,
    ref: useMergedRef(ref, inputRef),
    size,
    styles,
    classNames,
    inputLabel: firstValueValid ? `${firstDateLabel} ${labelSeparator} ${secondDateLabel}` : "",
    __staticSelector: "DateRangePicker",
    dropdownType,
    clearable: clearable && firstValueValid,
    clearButtonLabel,
    onClear: handleClear,
    withinPortal,
    amountOfMonths,
    onDropdownClose,
    onDropdownOpen
  }, others), /* @__PURE__ */ React.createElement(RangeCalendar, {
    classNames,
    styles,
    locale: finalLocale,
    nextMonthLabel,
    previousMonthLabel,
    initialMonth: valueValid ? _value[0] : initialMonth,
    value: _value,
    onChange: handleValueChange,
    labelFormat,
    dayClassName,
    dayStyle,
    disableOutsideEvents,
    minDate,
    maxDate,
    excludeDate,
    __staticSelector: "DateRangePicker",
    fullWidth: dropdownType === "modal",
    firstDayOfWeek,
    size: dropdownType === "modal" ? "lg" : calendarSize,
    allowSingleDateInRange,
    amountOfMonths,
    initialLevel,
    hideOutsideDates,
    hideWeekdays
  }));
});
DateRangePicker.displayName = "@mantine/dates/DateRangePicker";

export { DateRangePicker };
//# sourceMappingURL=DateRangePicker.js.map
