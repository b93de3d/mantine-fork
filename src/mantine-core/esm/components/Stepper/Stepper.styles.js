import { createStyles } from '@mantine/styles';
import { iconSizes } from './Step/Step.styles.js';

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
var useStyles = createStyles((theme, { contentPadding, color, orientation, iconPosition, iconSize, size, breakpoint }) => {
  const shouldBeResponsive = typeof breakpoint !== "undefined";
  const breakpointValue = theme.fn.size({ size: breakpoint, sizes: theme.breakpoints });
  const separatorOffset = typeof iconSize !== "undefined" ? iconSize / 2 - 1 : theme.fn.size({ size, sizes: iconSizes }) / 2 - 1;
  const verticalOrientationStyles = {
    steps: {
      flexDirection: "column",
      alignItems: iconPosition === "left" ? "flex-start" : "flex-end"
    },
    separator: {
      width: 2,
      minHeight: theme.spacing.xl,
      marginLeft: iconPosition === "left" ? separatorOffset : 0,
      marginRight: iconPosition === "right" ? separatorOffset : 0,
      marginTop: theme.spacing.xs / 2,
      marginBottom: theme.spacing.xs / 2
    }
  };
  const responsiveStyles = {
    steps: {
      [`@media (max-width: ${breakpointValue}px)`]: verticalOrientationStyles.steps
    },
    separator: {
      [`@media (max-width: ${breakpointValue}px)`]: verticalOrientationStyles.separator
    }
  };
  return {
    root: {},
    steps: __spreadValues(__spreadValues({
      display: "flex",
      boxSizing: "border-box",
      alignItems: "center"
    }, orientation === "vertical" ? verticalOrientationStyles.steps : null), shouldBeResponsive ? responsiveStyles.steps : null),
    separator: __spreadValues(__spreadValues({
      boxSizing: "border-box",
      transition: "background-color 150ms ease",
      flex: 1,
      height: 2,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      marginLeft: theme.spacing.md,
      marginRight: theme.spacing.md
    }, orientation === "vertical" ? verticalOrientationStyles.separator : null), shouldBeResponsive ? responsiveStyles.separator : null),
    separatorActive: {
      backgroundColor: theme.fn.themeColor(color, theme.colorScheme === "dark" ? 7 : 6)
    },
    content: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing })
    })
  };
});

export default useStyles;
//# sourceMappingURL=Stepper.styles.js.map
