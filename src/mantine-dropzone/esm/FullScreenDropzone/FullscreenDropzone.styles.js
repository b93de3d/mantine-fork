import { createStyles, getSharedColorScheme } from '@mantine/core';

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
var useStyles = createStyles((theme, { offset, padding, radius }) => {
  const spacing = theme.fn.size({ size: offset, sizes: theme.spacing });
  const rejected = getSharedColorScheme({ color: "red", theme, variant: "light" });
  const accepted = getSharedColorScheme({ color: theme.primaryColor, theme, variant: "light" });
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      padding: spacing
    },
    dropzone: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      boxSizing: "border-box",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      border: `2px dashed ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}`,
      padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      cursor: "pointer",
      userSelect: "none",
      transition: "background-color 150ms ease",
      position: "relative",
      height: `calc(100vh - ${spacing * 2}px)`
    }),
    active: {
      backgroundColor: theme.colorScheme === "dark" ? accepted.background : theme.colors[theme.primaryColor][0],
      borderColor: theme.colorScheme === "dark" ? accepted.border : theme.colors[theme.primaryColor][4],
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? accepted.background : theme.colors[theme.primaryColor][0]
      }
    },
    reject: {
      backgroundColor: theme.colorScheme === "dark" ? rejected.background : theme.colors.red[0],
      borderColor: theme.colorScheme === "dark" ? rejected.border : theme.colors.red[4],
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? rejected.background : theme.colors.red[0]
      }
    }
  };
});

export default useStyles;
//# sourceMappingURL=FullscreenDropzone.styles.js.map
