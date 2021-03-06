'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var Divider_styles = require('./Divider.styles.js');
var Box = require('../Box/Box.js');
var Text = require('../Text/Text.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const Divider = React.forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    color,
    orientation = "horizontal",
    size = "xs",
    label,
    labelPosition = "left",
    labelProps,
    variant = "solid",
    styles: styles$1,
    classNames
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "orientation",
    "size",
    "label",
    "labelPosition",
    "labelProps",
    "variant",
    "styles",
    "classNames"
  ]);
  const theme = styles.useMantineTheme();
  const _color = color || (theme.colorScheme === "dark" ? "dark" : "gray");
  const { classes, cx } = Divider_styles['default']({ color: _color, size, variant }, { classNames, styles: styles$1, name: "Divider" });
  const vertical = orientation === "vertical";
  const horizontal = !vertical;
  const withLabel = !!label && horizontal;
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    ref,
    className: cx({
      [classes.vertical]: vertical,
      [classes.horizontal]: horizontal,
      [classes.withLabel]: withLabel
    }, className)
  }, others), !!label && horizontal && /* @__PURE__ */ React__default.createElement(Text.Text, __spreadProps(__spreadValues({}, labelProps), {
    color: _color,
    size: (labelProps == null ? void 0 : labelProps.size) || "xs",
    sx: { marginTop: 2 },
    className: cx(classes.label, classes[labelPosition])
  }), label));
});
Divider.displayName = "@mantine/core/Divider";

exports.Divider = Divider;
//# sourceMappingURL=Divider.js.map
