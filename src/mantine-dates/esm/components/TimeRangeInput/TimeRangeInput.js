import React, { forwardRef, useRef, useState } from 'react';
import { extractMargins, CloseButton, InputWrapper, Input } from '@mantine/core';
import { useUuid, useDidUpdate, useMergedRef } from '@mantine/hooks';
import useStyles from './TimeRangeInput.styles.js';
import { TimeInput } from '../TimeInput/TimeInput.js';

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
const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44
};
const TimeRangeInput = forwardRef((_a, ref) => {
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
    defaultValue = [null, null],
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
    labelSeparator = "\u2013",
    disabled = false,
    sx
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
    "labelSeparator",
    "disabled",
    "sx"
  ]);
  const { classes, cx, theme } = useStyles({ size }, { classNames, styles, name: "TimeRangeInput" });
  const { margins, rest } = extractMargins(others);
  const uuid = useUuid(id);
  const fromTimeRef = useRef();
  const toTimeRef = useRef();
  const [_value, setValue] = useState(value != null ? value : defaultValue);
  useDidUpdate(() => {
    typeof onChange === "function" && onChange(_value);
  }, [_value]);
  useDidUpdate(() => {
    var _a2, _b2, _c, _d;
    if (((_a2 = value[0]) == null ? void 0 : _a2.getTime()) !== ((_b2 = _value[0]) == null ? void 0 : _b2.getTime()) || ((_c = value[1]) == null ? void 0 : _c.getTime()) !== ((_d = _value[1]) == null ? void 0 : _d.getTime())) {
      setValue(value);
    }
  }, [value]);
  const handleClear = () => {
    var _a2;
    setValue([null, null]);
    (_a2 = fromTimeRef.current) == null ? void 0 : _a2.focus();
  };
  const rightSection = clearable && _value.filter((item) => Boolean(item)).length > 0 ? /* @__PURE__ */ React.createElement(CloseButton, {
    variant: "transparent",
    "aria-label": clearButtonLabel,
    onClick: handleClear,
    size
  }) : null;
  const forwardProps = {
    amPmLabel,
    amPmPlaceholder,
    disabled,
    format,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    size,
    timePlaceholder,
    withSeconds
  };
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
    __staticSelector: "TimeRangeInput",
    id: uuid,
    sx
  }, margins), wrapperProps), /* @__PURE__ */ React.createElement(Input, __spreadValues({
    component: "div",
    __staticSelector: "TimeRangeInput",
    required,
    invalid: !!error,
    onClick: () => {
      var _a2;
      (_a2 = fromTimeRef.current) == null ? void 0 : _a2.focus();
    },
    size,
    className: cx({ [classes.disabled]: disabled }),
    classNames,
    styles,
    disabled,
    rightSection,
    rightSectionWidth: theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })
  }, rest), /* @__PURE__ */ React.createElement("div", {
    className: classes.inputWrapper
  }, /* @__PURE__ */ React.createElement(TimeInput, __spreadValues({
    ref: useMergedRef(fromTimeRef, ref),
    variant: "unstyled",
    value: _value[0],
    onChange: (date) => setValue([date, _value[1]]),
    name,
    nextRef: toTimeRef,
    id: uuid
  }, forwardProps)), /* @__PURE__ */ React.createElement("span", {
    className: classes.separator,
    style: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7]
    }
  }, labelSeparator), /* @__PURE__ */ React.createElement(TimeInput, __spreadValues({
    ref: toTimeRef,
    variant: "unstyled",
    value: _value[1],
    onChange: (date) => setValue([_value[0], date])
  }, forwardProps)))));
});
TimeRangeInput.displayName = "@mantine/dates/TimeRangeInput";

export { TimeRangeInput };
//# sourceMappingURL=TimeRangeInput.js.map
