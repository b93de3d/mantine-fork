import React, { forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, LoadingOverlay } from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import useStyles from './Dropzone.styles.js';

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
const Dropzone = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    padding = "md",
    radius = "sm",
    disabled,
    classNames,
    styles,
    loading = false,
    multiple = true,
    maxSize = Infinity,
    accept,
    children,
    onDrop,
    onReject,
    openRef
  } = _b, others = __objRest(_b, [
    "className",
    "padding",
    "radius",
    "disabled",
    "classNames",
    "styles",
    "loading",
    "multiple",
    "maxSize",
    "accept",
    "children",
    "onDrop",
    "onReject",
    "openRef"
  ]);
  const { classes, cx } = useStyles({ radius, padding }, { classNames, styles, name: "Dropzone" });
  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDropAccepted: (files) => onDrop(files),
    onDropRejected: (fileRejections) => onReject(fileRejections),
    disabled: disabled || loading,
    accept,
    multiple,
    maxSize
  });
  assignRef(openRef, open);
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues(__spreadValues({}, others), getRootProps({ ref })), {
    className: cx(classes.root, {
      [classes.active]: isDragAccept,
      [classes.reject]: isDragReject,
      [classes.loading]: loading
    }, className)
  }), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: loading,
    radius
  }), /* @__PURE__ */ React.createElement("input", __spreadValues({}, getInputProps())), children({ accepted: isDragAccept, rejected: isDragReject }));
});
Dropzone.displayName = "@mantine/dropzone/Dropzone";

export { Dropzone };
//# sourceMappingURL=Dropzone.js.map
