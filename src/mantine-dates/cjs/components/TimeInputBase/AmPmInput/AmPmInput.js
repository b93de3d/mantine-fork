'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var TimeInputBase_styles = require('../TimeInputBase.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
const AmPmInput = React.forwardRef((_a, ref) => {
  var _b = _a, { className, onChange, onFocus, size = "sm", value } = _b, others = __objRest(_b, ["className", "onChange", "onFocus", "size", "value"]);
  const { classes, cx } = TimeInputBase_styles['default']({ size, hasValue: !!value });
  const inputRef = React.useRef();
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
  return /* @__PURE__ */ React__default.createElement("input", __spreadValues({
    type: "text",
    ref: hooks.useMergedRef(inputRef, ref),
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    value,
    className: cx(classes.timeInput, className)
  }, others));
});
AmPmInput.displayName = "@mantine/dates/AmPmInput";

exports.AmPmInput = AmPmInput;
//# sourceMappingURL=AmPmInput.js.map
