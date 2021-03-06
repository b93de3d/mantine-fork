'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./fns/index.js');

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
function attachFunctions(themeBase) {
  return __spreadProps(__spreadValues({}, themeBase), {
    fn: {
      fontStyles: index.fns.fontStyles(themeBase),
      themeColor: index.fns.themeColor(themeBase),
      focusStyles: index.fns.focusStyles(themeBase),
      largerThan: index.fns.largerThan(themeBase),
      smallerThan: index.fns.smallerThan(themeBase),
      radialGradient: index.fns.radialGradient,
      linearGradient: index.fns.linearGradient,
      rgba: index.fns.rgba,
      size: index.fns.size,
      cover: index.fns.cover,
      lighten: index.fns.lighten,
      darken: index.fns.darken
    }
  });
}

exports.attachFunctions = attachFunctions;
//# sourceMappingURL=attach-functions.js.map
