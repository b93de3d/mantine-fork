import React, { forwardRef, useState, useRef } from 'react';
import { useMergedRef, clamp } from '@mantine/hooks';
import { Text } from '@mantine/core';
import { padTime } from '../pad-time/pad-time.js';
import useStyles from '../TimeInputBase.styles.js';

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
const TimeField = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    onFocus,
    onBlur,
    onChange,
    setValue,
    withSeparator = false,
    size = "sm",
    max,
    min = 0,
    value
  } = _b, others = __objRest(_b, [
    "className",
    "onFocus",
    "onBlur",
    "onChange",
    "setValue",
    "withSeparator",
    "size",
    "max",
    "min",
    "value"
  ]);
  const [digitsEntered, setDigitsEntered] = useState(0);
  const { classes, cx, theme } = useStyles({ size, hasValue: !!value });
  const inputRef = useRef();
  const handleFocus = (event) => {
    typeof onFocus === "function" && onFocus(event);
    inputRef.current.select();
    setDigitsEntered(0);
  };
  const handleBlur = (event) => {
    typeof onBlur === "function" && onBlur(event);
    if (digitsEntered === 1) {
      typeof onChange === "function" && onChange(event.currentTarget.value, false);
    }
  };
  const handleClick = (event) => {
    event.stopPropagation();
    inputRef.current.select();
  };
  const handleKeyDown = (event) => {
    if (event.nativeEvent.code === "ArrowUp") {
      event.preventDefault();
      const padded = padTime(clamp({ value: parseInt(event.currentTarget.value, 10) + 1, max, min }).toString());
      if (value !== padded) {
        onChange(padded, false);
      }
    }
    if (event.nativeEvent.code === "ArrowDown") {
      event.preventDefault();
      const padded = padTime(clamp({ value: parseInt(event.currentTarget.value, 10) - 1, max, min }).toString());
      if (value !== padded) {
        onChange(padded, false);
      }
    }
  };
  const handleChange = (event) => {
    setDigitsEntered(digitsEntered + 1);
    const _val = parseInt(event.currentTarget.value, 10).toString();
    if (_val === "0" && digitsEntered === 0) {
      setValue("00");
      return;
    }
    onChange(_val, true, digitsEntered > 0);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "text",
    ref: useMergedRef(inputRef, ref),
    onChange: handleChange,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    value,
    className: cx(classes.timeInput, className)
  }, others)), withSeparator && /* @__PURE__ */ React.createElement(Text, {
    size,
    style: {
      lineHeight: 1,
      color: value ? "inherit" : theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7]
    }
  }, ":"));
});
TimeField.displayName = "@mantine/dates/TimeField";

export { TimeField };
//# sourceMappingURL=TimeField.js.map
