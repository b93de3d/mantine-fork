import React from 'react';
import useStyles from './TimelineItem.styles.js';
import { Box } from '../../Box/Box.js';
import { Text } from '../../Text/Text.js';

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
function TimelineItem(_a) {
  var _b = _a, {
    className,
    bullet,
    title,
    bulletSize = 20,
    radius = "xl",
    lineWidth = 4,
    active,
    lineActive,
    classNames,
    styles,
    children,
    color,
    align,
    lineVariant = "solid"
  } = _b, others = __objRest(_b, [
    "className",
    "bullet",
    "title",
    "bulletSize",
    "radius",
    "lineWidth",
    "active",
    "lineActive",
    "classNames",
    "styles",
    "children",
    "color",
    "align",
    "lineVariant"
  ]);
  const { classes, cx } = useStyles({ bulletSize, color, radius, align, lineVariant, lineWidth }, { classNames, styles, name: "Timeline" });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.item, { [classes.itemLineActive]: lineActive, [classes.itemActive]: active }, className)
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.itemBullet, { [classes.itemBulletWithChild]: bullet })
  }, bullet), /* @__PURE__ */ React.createElement("div", {
    className: classes.itemBody
  }, title && /* @__PURE__ */ React.createElement(Text, {
    className: classes.itemTitle
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: classes.itemContent
  }, children)));
}
TimelineItem.displayName = "@mantine/core/TimelineItem";

export { TimelineItem };
//# sourceMappingURL=TimelineItem.js.map
