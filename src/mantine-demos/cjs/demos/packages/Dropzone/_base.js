'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var radixIcons = require('@modulz/radix-icons');
var dropzone = require('@mantine/dropzone');

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
function getIconColor(status, theme) {
  return status.accepted ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6] : status.rejected ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6] : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7];
}
function ImageUploadIcon(_a) {
  var _b = _a, {
    status
  } = _b, props = __objRest(_b, [
    "status"
  ]);
  if (status.accepted) {
    return /* @__PURE__ */ React__default.createElement(radixIcons.UploadIcon, __spreadValues({}, props));
  }
  if (status.rejected) {
    return /* @__PURE__ */ React__default.createElement(radixIcons.CrossCircledIcon, __spreadValues({}, props));
  }
  return /* @__PURE__ */ React__default.createElement(radixIcons.ImageIcon, __spreadValues({}, props));
}
const dropzoneChildren = (status, theme) => /* @__PURE__ */ React__default.createElement(core.Group, {
  position: "center",
  spacing: "xl",
  style: { minHeight: 220, pointerEvents: "none" }
}, /* @__PURE__ */ React__default.createElement(ImageUploadIcon, {
  status,
  style: { width: 80, height: 80, color: getIconColor(status, theme) }
}), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, {
  size: "xl",
  inline: true
}, "Drag images here or click to select files"), /* @__PURE__ */ React__default.createElement(core.Text, {
  size: "sm",
  color: "dimmed",
  inline: true,
  mt: 7
}, "Attach as many files as you like, each file should not exceed 5mb")));
function BaseDemo(props) {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(dropzone.Dropzone, __spreadValues({
    onDrop: (files) => console.log("accepted files", files),
    onReject: (files) => console.log("rejected files", files),
    maxSize: 3 * 1024 ** 2,
    accept: dropzone.IMAGE_MIME_TYPE
  }, props), (status) => dropzoneChildren(status, theme));
}

exports.BaseDemo = BaseDemo;
exports.dropzoneChildren = dropzoneChildren;
//# sourceMappingURL=_base.js.map
