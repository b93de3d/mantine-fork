import { createStyles } from '@mantine/core';

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
var useStyles = createStyles((theme, { fullWidth }) => ({
  weekday: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[5]
  },
  month: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    borderCollapse: "collapse",
    width: fullWidth ? "100%" : "auto",
    tableLayout: "fixed"
  }),
  cell: {
    boxSizing: "border-box",
    padding: 0,
    borderTop: "1px solid transparent"
  },
  weekdayCell: {
    boxSizing: "border-box",
    padding: 0,
    fontWeight: "normal",
    paddingBottom: theme.spacing.xs / 2,
    textAlign: "center",
    cursor: "default",
    userSelect: "none"
  }
}));

export default useStyles;
//# sourceMappingURL=Month.styles.js.map
