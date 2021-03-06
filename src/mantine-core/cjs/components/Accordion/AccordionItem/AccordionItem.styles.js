'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

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
var useStyles = styles.createStyles((theme, {
  transitionDuration,
  disableIconRotation,
  iconPosition,
  offsetIcon,
  iconSize
}, getRef) => {
  const icon = getRef("icon");
  const itemTitle = getRef("itemTitle");
  return {
    icon: {
      ref: icon,
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: iconPosition === "right" ? 0 : theme.spacing.sm,
      marginLeft: iconPosition === "right" ? theme.spacing.lg : 0,
      width: iconSize,
      minWidth: iconSize
    },
    label: {
      color: "inherit",
      fontWeight: 500,
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    item: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    },
    itemOpened: {
      [`& > .${itemTitle} .${icon}`]: {
        transform: disableIconRotation ? "none" : "rotate(180deg)"
      }
    },
    itemTitle: {
      ref: itemTitle,
      margin: 0,
      padding: 0,
      fontWeight: "normal"
    },
    control: __spreadProps(__spreadValues(__spreadValues({}, theme.fn.focusStyles()), theme.fn.fontStyles()), {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: iconPosition === "right" ? "row-reverse" : "row",
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: iconPosition === "right" ? theme.spacing.sm + 4 : null,
      fontWeight: 500,
      textAlign: "left",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
      }
    }),
    content: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      wordBreak: "break-word",
      lineHeight: theme.lineHeight,
      paddingLeft: iconPosition === "right" ? 0 : offsetIcon ? iconSize + theme.spacing.xs / 2 : 0
    }),
    contentInner: {
      padding: theme.spacing.md,
      paddingTop: theme.spacing.xs / 2
    }
  };
});

exports.default = useStyles;
//# sourceMappingURL=AccordionItem.styles.js.map
