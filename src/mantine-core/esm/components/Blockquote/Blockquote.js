import React, { forwardRef } from 'react';
import { QuoteIcon } from './QuoteIcon.js';
import useStyles from './Blockquote.styles.js';
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
const defaultIcon = /* @__PURE__ */ React.createElement(QuoteIcon, null);
const Blockquote = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    color = "gray",
    icon = defaultIcon,
    cite,
    children,
    classNames,
    styles
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "icon",
    "cite",
    "children",
    "classNames",
    "styles"
  ]);
  const { classes, cx } = useStyles({ color }, { classNames, styles, name: "Blockquote" });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "blockquote",
    className: cx(classes.root, className),
    ref
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.inner
  }, icon && /* @__PURE__ */ React.createElement("div", {
    className: classes.icon
  }, icon), /* @__PURE__ */ React.createElement("div", {
    className: classes.body
  }, children, cite && /* @__PURE__ */ React.createElement("cite", {
    className: classes.cite
  }, cite))));
});
Blockquote.displayName = "@mantine/core/Blockquote";

export { Blockquote };
//# sourceMappingURL=Blockquote.js.map