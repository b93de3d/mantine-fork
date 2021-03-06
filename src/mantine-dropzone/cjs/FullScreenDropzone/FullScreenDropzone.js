'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var FullscreenDropzone_styles = require('./FullscreenDropzone.styles.js');

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
function isVisible(event) {
  for (let i = 0; i < event.dataTransfer.items.length; i += 1) {
    if (event.dataTransfer.items[i].kind !== "file") {
      return false;
    }
  }
  return true;
}
function isValidDrop(event, mime) {
  var _a;
  const items = (_a = event == null ? void 0 : event.dataTransfer) == null ? void 0 : _a.items;
  if (mime.includes("*")) {
    return true;
  }
  for (let i = 0; i < (items == null ? void 0 : items.length); i += 1) {
    if (!mime.includes(items[i].type)) {
      return false;
    }
  }
  return true;
}
function FullScreenDropzone(_a) {
  var _b = _a, {
    className,
    style,
    offset = "xl",
    padding = "md",
    radius = "sm",
    classNames,
    styles,
    disabled,
    accept = ["*"],
    zIndex = 1e3,
    onDrop,
    children
  } = _b, others = __objRest(_b, [
    "className",
    "style",
    "offset",
    "padding",
    "radius",
    "classNames",
    "styles",
    "disabled",
    "accept",
    "zIndex",
    "onDrop",
    "children"
  ]);
  const { classes, cx } = FullscreenDropzone_styles['default']({ offset, padding, radius }, { classNames, styles, name: "FullScreenDropzone" });
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleDragOver = (event) => {
    event.preventDefault();
    setError(!isValidDrop(event, accept));
    setVisible(isVisible(event));
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    setVisible(false);
  };
  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setVisible(false);
    if (isValidDrop(event, accept)) {
      onDrop(Array.from(event.dataTransfer.files));
    }
  };
  hooks.useIsomorphicEffect(() => {
    if (!disabled) {
      document.addEventListener("dragover", handleDragOver, false);
      document.addEventListener("dragleave", handleDragLeave, false);
      document.addEventListener("drop", handleDrop, false);
      return () => {
        document.removeEventListener("dragover", handleDragOver, false);
        document.removeEventListener("dragleave", handleDragLeave, false);
        document.removeEventListener("drop", handleDrop, false);
      };
    }
    return void 0;
  }, [disabled]);
  return /* @__PURE__ */ React__default.createElement(core.Portal, {
    zIndex
  }, /* @__PURE__ */ React__default.createElement(core.Transition, {
    transition: "fade",
    duration: 200,
    timingFunction: "ease",
    mounted: visible && !disabled
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    style: __spreadValues(__spreadValues({}, style), transitionStyles),
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.dropzone, {
      [classes.active]: visible && !error,
      [classes.reject]: error
    }, className)
  }, children({ accepted: visible && !error, rejected: error })))));
}
FullScreenDropzone.displayName = "@mantine/dropzone/FullScreenDropzone";

exports.FullScreenDropzone = FullScreenDropzone;
//# sourceMappingURL=FullScreenDropzone.js.map
