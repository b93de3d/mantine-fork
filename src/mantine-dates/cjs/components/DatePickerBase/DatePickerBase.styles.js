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
var useStyles = core.createStyles((theme, { size, invalid }) => ({
  wrapper: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    position: "relative",
    cursor: "pointer"
  }),
  placeholder: {
    lineHeight: `${theme.fn.size({ size, sizes: core.INPUT_SIZES }) - 2}px`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: invalid ? theme.colors.red[theme.colorScheme === "dark" ? 6 : 7] : theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
  },
  value: {
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  dropdownWrapper: {
    position: "relative",
    pointerEvents: "all"
  },
  input: {
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  freeInput: {
    cursor: "text"
  },
  dropdown: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.md}px ${theme.spacing.xs}px`
  },
  arrow: {
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
  }
}));

exports.default = useStyles;
//# sourceMappingURL=DatePickerBase.styles.js.map
