import React, { forwardRef } from 'react';
import { useMantineTheme } from '@mantine/styles';
import { ActionIcon } from '../ActionIcon.js';
import { CloseIcon } from './CloseIcon.js';

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
const iconSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
};
const CloseButton = forwardRef((_a, ref) => {
  var _b = _a, { iconSize, size = "md" } = _b, others = __objRest(_b, ["iconSize", "size"]);
  const theme = useMantineTheme();
  const _iconSize = iconSize || theme.fn.size({ size, sizes: iconSizes });
  return /* @__PURE__ */ React.createElement(ActionIcon, __spreadValues({
    size,
    ref
  }, others), /* @__PURE__ */ React.createElement(CloseIcon, {
    width: _iconSize,
    height: _iconSize
  }));
});
CloseButton.displayName = "@mantine/core/CloseButton";

export { CloseButton };
//# sourceMappingURL=CloseButton.js.map
