import React, { forwardRef } from 'react';
import { TimelineItem } from './TimelineItem/TimelineItem.js';
import { filterChildrenByType } from '../../utils/filter-children-by-type/filter-children-by-type.js';
import { Box } from '../Box/Box.js';

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
const Timeline = forwardRef((_a, ref) => {
  var _b = _a, {
    children,
    active = -1,
    color,
    radius = "xl",
    bulletSize = 20,
    align = "left",
    lineWidth = 4,
    classNames,
    styles,
    sx,
    reverseActive = false
  } = _b, others = __objRest(_b, [
    "children",
    "active",
    "color",
    "radius",
    "bulletSize",
    "align",
    "lineWidth",
    "classNames",
    "styles",
    "sx",
    "reverseActive"
  ]);
  const _children = filterChildrenByType(children, TimelineItem);
  const items = _children.map((item, index) => React.cloneElement(item, {
    classNames,
    styles,
    align,
    lineWidth,
    radius: item.props.radius || radius,
    color: item.props.color || color,
    bulletSize: item.props.bulletSize || bulletSize,
    active: item.props.active || (reverseActive ? active >= _children.length - index - 1 : active >= index),
    lineActive: item.props.lineActive || (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index)
  }));
  const offset = align === "left" ? { paddingLeft: bulletSize / 2 + lineWidth / 2 } : { paddingRight: bulletSize / 2 + lineWidth / 2 };
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    ref,
    sx: [offset, sx]
  }, others), items);
});
Timeline.Item = TimelineItem;
Timeline.displayName = "@mantine/core/Timeline";

export { Timeline };
//# sourceMappingURL=Timeline.js.map
