'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var Calendar = require('../Calendar/Calendar.js');
var DatePickerBase = require('../DatePickerBase/DatePickerBase.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
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
const DatePicker = React.forwardRef((_a, ref) => {
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
    name = "date",
    size = "sm",
    dropdownType = "popover",
    clearable = true,
    disabled = false,
    clearButtonLabel,
    fixOnBlur = true,
    allowFreeInput,
    withinPortal = true,
    dateParser,
    firstDayOfWeek = "monday",
    onFocus,
    onBlur,
    amountOfMonths,
    allowLevelChange,
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
    "name",
    "size",
    "dropdownType",
    "clearable",
    "disabled",
    "clearButtonLabel",
    "fixOnBlur",
    "allowFreeInput",
    "withinPortal",
    "dateParser",
    "firstDayOfWeek",
    "onFocus",
    "onBlur",
    "amountOfMonths",
    "allowLevelChange",
    "initialLevel",
    "onDropdownClose",
    "onDropdownOpen",
    "hideOutsideDates",
    "hideWeekdays"
  ]);
  const theme = core.useMantineTheme();
  const finalLocale = locale || theme.datesLocale;
  const dateFormat = inputFormat || theme.dateFormat;
  const [dropdownOpened, setDropdownOpened] = React.useState(initiallyOpened);
  const calendarSize = size === "lg" || size === "xl" ? "md" : "sm";
  const inputRef = React.useRef();
  const [lastValidValue, setLastValidValue] = React.useState(defaultValue != null ? defaultValue : null);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => val === null || val instanceof Date
  });
  const [calendarMonth, setCalendarMonth] = React.useState(_value || initialMonth || new Date());
  const [focused, setFocused] = React.useState(false);
  const [inputState, setInputState] = React.useState(_value instanceof Date ? hooks.upperFirst(dayjs__default(_value).locale(finalLocale).format(dateFormat)) : "");
  const closeDropdown = () => {
    setDropdownOpened(false);
    onDropdownClose == null ? void 0 : onDropdownClose();
  };
  const openDropdown = () => {
    setDropdownOpened(true);
    onDropdownOpen == null ? void 0 : onDropdownOpen();
  };
  React.useEffect(() => {
    if (value === null && !focused) {
      setInputState("");
    }
    if (value instanceof Date && !focused) {
      setInputState(dayjs__default(value).locale(finalLocale).format(dateFormat));
    }
  }, [value, focused]);
  const handleValueChange = (date) => {
    setValue(date);
    setInputState(hooks.upperFirst(dayjs__default(date).locale(finalLocale).format(dateFormat)));
    closeCalendarOnChange && closeDropdown();
    window.setTimeout(() => {
      var _a2;
      return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    }, 0);
  };
  const handleClear = () => {
    var _a2;
    setValue(null);
    setLastValidValue(null);
    setInputState("");
    openDropdown();
    (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
  };
  const parseDate = (date) => dateParser ? dateParser(date) : dayjs__default(date, dateFormat, finalLocale).toDate();
  const setDateFromInput = () => {
    let date = typeof _value === "string" ? parseDate(_value) : _value;
    if (maxDate && dayjs__default(date).isAfter(maxDate)) {
      date = maxDate;
    }
    if (minDate && dayjs__default(date).isBefore(minDate)) {
      date = minDate;
    }
    if (dayjs__default(date).isValid()) {
      setValue(date);
      setLastValidValue(date);
      setInputState(hooks.upperFirst(dayjs__default(date).locale(finalLocale).format(dateFormat)));
      setCalendarMonth(date);
    } else if (fixOnBlur) {
      setValue(lastValidValue);
    }
  };
  const handleInputBlur = (event) => {
    typeof onBlur === "function" && onBlur(event);
    setFocused(false);
    if (allowFreeInput) {
      setDateFromInput();
    }
  };
  const handleKeyDown = (event) => {
    if (event.code === "Enter" && allowFreeInput) {
      closeDropdown();
      setDateFromInput();
    }
  };
  const handleInputFocus = (event) => {
    typeof onFocus === "function" && onFocus(event);
    setFocused(true);
  };
  const handleChange = (event) => {
    openDropdown();
    const date = parseDate(event.target.value);
    if (dayjs__default(date).isValid()) {
      setValue(date);
      setLastValidValue(date);
      setInputState(event.target.value);
      setCalendarMonth(date);
    } else {
      setInputState(event.target.value);
    }
  };
  return /* @__PURE__ */ React__default.createElement(DatePickerBase.DatePickerBase, __spreadValues({
    allowFreeInput,
    dropdownOpened,
    setDropdownOpened,
    shadow,
    transitionDuration,
    ref: hooks.useMergedRef(ref, inputRef),
    size,
    styles,
    classNames,
    onChange: handleChange,
    onBlur: handleInputBlur,
    onFocus: handleInputFocus,
    onKeyDown: handleKeyDown,
    name,
    inputLabel: inputState,
    __staticSelector: "DatePicker",
    dropdownType,
    clearable: clearable && !!_value && !disabled,
    clearButtonLabel,
    onClear: handleClear,
    disabled,
    withinPortal,
    amountOfMonths,
    onDropdownClose,
    onDropdownOpen
  }, others), /* @__PURE__ */ React__default.createElement(Calendar.Calendar, {
    classNames,
    styles,
    locale: finalLocale,
    nextMonthLabel,
    previousMonthLabel,
    month: allowFreeInput ? calendarMonth : void 0,
    initialMonth: initialMonth || (_value instanceof Date ? _value : new Date()),
    onMonthChange: setCalendarMonth,
    value: _value instanceof Date ? _value : dayjs__default(_value).toDate(),
    onChange: handleValueChange,
    labelFormat,
    dayClassName,
    dayStyle,
    disableOutsideEvents,
    minDate,
    maxDate,
    excludeDate,
    __staticSelector: "DatePicker",
    fullWidth: dropdownType === "modal",
    size: dropdownType === "modal" ? "lg" : calendarSize,
    firstDayOfWeek,
    preventFocus: allowFreeInput,
    amountOfMonths,
    allowLevelChange,
    initialLevel,
    hideOutsideDates,
    hideWeekdays
  }));
});
DatePicker.displayName = "@mantine/dates/DatePicker";

exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map
