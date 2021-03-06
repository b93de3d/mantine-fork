'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var NavbarSection = require('./NavbarSection/NavbarSection.js');
var Navbar_styles = require('./Navbar.styles.js');
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
const Navbar = React.forwardRef((_a, ref) => {
  var _b = _a, {
    width,
    height = "100vh",
    padding = 0,
    fixed = false,
    position = { top: 0, left: 0 },
    zIndex = styles.getDefaultZIndex("app"),
    hiddenBreakpoint = "md",
    hidden = false,
    className,
    classNames,
    styles: styles$1,
    children
  } = _b, others = __objRest(_b, [
    "width",
    "height",
    "padding",
    "fixed",
    "position",
    "zIndex",
    "hiddenBreakpoint",
    "hidden",
    "className",
    "classNames",
    "styles",
    "children"
  ]);
  const { classes, cx } = Navbar_styles['default']({ width, height, padding, fixed, position, hiddenBreakpoint, zIndex }, { classNames, styles: styles$1, name: "Navbar" });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    component: "nav",
    ref,
    className: cx(classes.root, { [classes.hidden]: hidden }, className)
  }, others), children);
});
Navbar.Section = NavbarSection.NavbarSection;
Navbar.displayName = "@mantine/core/Navbar";

exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.js.map
