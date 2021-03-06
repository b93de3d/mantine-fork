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
const sizes = {
  xs: 34,
  sm: 38,
  md: 46,
  lg: 58,
  xl: 66
};
var useStyles = createStyles((theme, { size, fullWidth, hideOutsideDates }, getRef) => {
  const weekend = { ref: getRef("weekend") };
  const outside = { ref: getRef("outside") };
  const selected = { ref: getRef("selected") };
  const inRange = { ref: getRef("inRange") };
  const firstInRange = { ref: getRef("firstInRange") };
  const lastInRange = { ref: getRef("lastInRange") };
  return {
    weekend,
    outside,
    selected,
    inRange,
    firstInRange,
    lastInRange,
    day: __spreadProps(__spreadValues(__spreadValues({}, theme.fn.fontStyles()), theme.fn.focusStyles()), {
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      width: fullWidth ? "100%" : theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      lineHeight: `${theme.fn.size({ size, sizes })}px`,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      padding: 0,
      borderRadius: theme.radius.sm,
      border: "1px dotted transparent",
      cursor: "pointer",
      userSelect: "none",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      "&:disabled": {
        pointerEvents: "none",
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]
      },
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
      },
      [`&.${weekend.ref}:not(:disabled)`]: {
        color: theme.colorScheme === "dark" ? theme.colors.red[5] : theme.colors.red[7]
      },
      [`&.${outside.ref}`]: {
        display: hideOutsideDates ? "none" : void 0,
        color: `${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]} !important`
      },
      [`&.${inRange.ref}:not(:disabled)`]: {
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.3) : theme.colors[theme.primaryColor][0],
        borderRadius: 0
      },
      [`&.${selected.ref}:not(:disabled)`]: {
        backgroundColor: theme.colors[theme.primaryColor][6],
        color: theme.white
      },
      [`&.${firstInRange.ref}:not(:disabled)`]: {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm
      },
      [`&.${lastInRange.ref}:not(:disabled)`]: {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm
      }
    })
  };
});

export default useStyles;
export { sizes };
//# sourceMappingURL=Day.styles.js.map
