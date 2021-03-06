import React, { forwardRef, useRef, useState } from 'react';
import { extractMargins, InputWrapper, Input, CloseButton } from '@mantine/core';
import { useUuid, useDidUpdate, useMergedRef } from '@mantine/hooks';
import { TimeField } from '../TimeInputBase/TimeField/TimeField.js';
import { createTimeHandler } from '../TimeInputBase/create-time-handler/create-time-handler.js';
import useStyles from './TimeInput.styles.js';
import { AmPmInput } from '../TimeInputBase/AmPmInput/AmPmInput.js';
import { createAmPmHandler } from '../TimeInputBase/create-amPm-handler/create-amPm-handler.js';
import { getDate } from '../TimeInputBase/get-date/get-date.js';
import { getTimeValues } from '../TimeInputBase/get-time-values/get-time-value.js';

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
const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44
};
const TimeInput = forwardRef((_a, ref) => {
  var _b = _a, {
    required,
    label,
    error,
    description,
    className,
    style,
    size = "sm",
    wrapperProps,
    classNames,
    styles,
    id,
    value,
    defaultValue,
    onChange,
    withSeconds = false,
    clearable = false,
    clearButtonLabel,
    format = "24",
    name,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    amPmLabel,
    timePlaceholder = "--",
    amPmPlaceholder = "am",
    disabled = false,
    sx,
    nextRef
  } = _b, others = __objRest(_b, [
    "required",
    "label",
    "error",
    "description",
    "className",
    "style",
    "size",
    "wrapperProps",
    "classNames",
    "styles",
    "id",
    "value",
    "defaultValue",
    "onChange",
    "withSeconds",
    "clearable",
    "clearButtonLabel",
    "format",
    "name",
    "hoursLabel",
    "minutesLabel",
    "secondsLabel",
    "amPmLabel",
    "timePlaceholder",
    "amPmPlaceholder",
    "disabled",
    "sx",
    "nextRef"
  ]);
  const { classes, cx, theme } = useStyles({ size }, { classNames, styles, name: "TimeInput" });
  const { margins, rest } = extractMargins(others);
  const uuid = useUuid(id);
  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();
  const amPmRef = useRef();
  const [time, setTime] = useState(getTimeValues(value || defaultValue, format));
  const [_value, setValue] = useState(value || defaultValue);
  useDidUpdate(() => {
    setTime(getTimeValues(_value, format));
  }, [_value, format]);
  useDidUpdate(() => {
    if ((value == null ? void 0 : value.getTime()) !== (_value == null ? void 0 : _value.getTime())) {
      setValue(value);
    }
  }, [value]);
  const setDate = (change) => {
    const timeWithChange = __spreadValues(__spreadValues({}, time), change);
    const newDate = getDate(timeWithChange.hours, timeWithChange.minutes, timeWithChange.seconds, format, timeWithChange.amPm);
    setValue(newDate);
    typeof onChange === "function" && onChange(newDate);
  };
  const handleHoursChange = createTimeHandler({
    onChange: (val) => {
      setDate({ hours: val });
    },
    min: format === "12" ? 1 : 0,
    max: format === "12" ? 12 : 23,
    maxValue: 2,
    nextRef: minutesRef
  });
  const handleMinutesChange = createTimeHandler({
    onChange: (val) => {
      setDate({ minutes: val });
    },
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: withSeconds ? secondsRef : format === "12" ? amPmRef : nextRef
  });
  const handleSecondsChange = createTimeHandler({
    onChange: (val) => {
      setDate({ seconds: val });
    },
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: format === "12" ? amPmRef : nextRef
  });
  const handleAmPmChange = createAmPmHandler({
    onChange: (val) => {
      setDate({ amPm: val });
    },
    nextRef
  });
  const handleClear = () => {
    setTime({ hours: "", minutes: "", seconds: "", amPm: "" });
    setValue(null);
    hoursRef.current.focus();
  };
  const rightSection = clearable && _value ? /* @__PURE__ */ React.createElement(CloseButton, {
    variant: "transparent",
    "aria-label": clearButtonLabel,
    onClick: handleClear,
    size
  }) : null;
  return /* @__PURE__ */ React.createElement(InputWrapper, __spreadValues(__spreadValues({
    required,
    label,
    error,
    description,
    className,
    style,
    classNames,
    styles,
    size,
    __staticSelector: "TimeInput",
    id: uuid,
    sx
  }, margins), wrapperProps), /* @__PURE__ */ React.createElement(Input, __spreadValues({
    component: "div",
    __staticSelector: "TimeInput",
    required,
    invalid: !!error,
    onClick: () => hoursRef.current.focus(),
    size,
    className: cx({ [classes.disabled]: disabled }),
    classNames,
    styles,
    disabled,
    rightSection,
    rightSectionWidth: theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })
  }, rest), /* @__PURE__ */ React.createElement("div", {
    className: classes.controls
  }, /* @__PURE__ */ React.createElement(TimeField, {
    ref: useMergedRef(hoursRef, ref),
    value: time.hours,
    onChange: handleHoursChange,
    setValue: (val) => setTime((current) => __spreadProps(__spreadValues({}, current), { hours: val })),
    id: uuid,
    className: classes.timeInput,
    withSeparator: true,
    size,
    max: format === "12" ? 12 : 23,
    placeholder: timePlaceholder,
    "aria-label": hoursLabel,
    disabled,
    name
  }), /* @__PURE__ */ React.createElement(TimeField, {
    ref: minutesRef,
    value: time.minutes,
    onChange: handleMinutesChange,
    setValue: (val) => setTime((current) => __spreadProps(__spreadValues({}, current), { minutes: val })),
    className: classes.timeInput,
    withSeparator: withSeconds,
    size,
    max: 59,
    placeholder: timePlaceholder,
    "aria-label": minutesLabel,
    disabled
  }), withSeconds && /* @__PURE__ */ React.createElement(TimeField, {
    ref: secondsRef,
    value: time.seconds,
    onChange: handleSecondsChange,
    setValue: (val) => setTime((current) => __spreadProps(__spreadValues({}, current), { seconds: val })),
    className: classes.timeInput,
    size,
    max: 59,
    placeholder: timePlaceholder,
    "aria-label": secondsLabel,
    disabled
  }), format === "12" && /* @__PURE__ */ React.createElement(AmPmInput, {
    ref: amPmRef,
    value: time.amPm,
    onChange: handleAmPmChange,
    placeholder: amPmPlaceholder,
    size,
    "aria-label": amPmLabel,
    disabled
  }))));
});
TimeInput.displayName = "@mantine/dates/TimeInput";

export { TimeInput };
//# sourceMappingURL=TimeInput.js.map
