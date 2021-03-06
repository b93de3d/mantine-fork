'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

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
const inputSizes = {
  xs: 20,
  sm: 23,
  md: 25,
  lg: 27,
  xl: 29
};
var useStyles = core.createStyles((theme, { size, hasValue }) => ({
  timeInput: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    width: theme.fn.size({ size, sizes: inputSizes }),
    appearance: "none",
    backgroundColor: "transparent",
    color: "inherit",
    padding: 0,
    textAlign: "center",
    border: "1px solid transparent",
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: 1,
    outline: 0,
    "&:focus": {
      textAlign: hasValue ? void 0 : "start"
    },
    "&::placeholder": {
      textAlign: "center"
    },
    "&[disabled]": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      cursor: "not-allowed"
    }
  })
}));

exports.default = useStyles;
exports.inputSizes = inputSizes;
//# sourceMappingURL=TimeInputBase.styles.js.map
