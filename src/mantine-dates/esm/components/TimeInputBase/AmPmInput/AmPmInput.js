import React, { forwardRef, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
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
const AmPmInput = forwardRef((_a, ref) => {
  var _b = _a, { className, onChange, onFocus, size = "sm", value } = _b, others = __objRest(_b, ["className", "onChange", "onFocus", "size", "value"]);
  const { classes, cx } = useStyles({ size, hasValue: !!value });
  const inputRef = useRef();
  const handleFocus = (event) => {
    typeof onFocus === "function" && onFocus(event);
    inputRef.current.select();
  };
  const handleClick = (event) => {
    event.stopPropagation();
    inputRef.current.select();
  };
  const handleKeyDown = (event) => {
    if (event.nativeEvent.code === "ArrowUp" || event.nativeEvent.code === "ArrowDown") {
      event.preventDefault();
      onChange(value === "am" ? "pm" : "am", true);
    }
    if (event.key === "p" || event.nativeEvent.code === "KeyP") {
      onChange("pm", false);
    }
    if (event.key === "a" || event.nativeEvent.code === "KeyA") {
      onChange("am", false);
    }
  };
  const handleChange = () => {
    onChange(value.toString(), true);
  };
  return /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "text",
    ref: useMergedRef(inputRef, ref),
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    value,
    className: cx(classes.timeInput, className)
  }, others));
});
AmPmInput.displayName = "@mantine/dates/AmPmInput";

export { AmPmInput };
//# sourceMappingURL=AmPmInput.js.map
