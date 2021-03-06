'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ListItem_styles = require('./ListItem.styles.js');
var Box = require('../../Box/Box.js');

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
function ListItem(_a) {
  var _b = _a, {
    className,
    children,
    icon,
    classNames,
    styles,
    spacing,
    center
  } = _b, others = __objRest(_b, [
    "className",
    "children",
    "icon",
    "classNames",
    "styles",
    "spacing",
    "center"
  ]);
  const { classes, cx } = ListItem_styles['default']({ spacing, center }, { classNames, styles, name: "List" });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    component: "li",
    className: cx(classes.item, { [classes.withIcon]: icon }, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.itemWrapper
  }, icon && /* @__PURE__ */ React__default.createElement("span", {
    className: classes.itemIcon
  }, icon), /* @__PURE__ */ React__default.createElement("span", null, children)));
}
ListItem.displayName = "@mantine/core/ListItem";

exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map
