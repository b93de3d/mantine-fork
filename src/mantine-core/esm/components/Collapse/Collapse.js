import React from 'react';
import { useReducedMotion } from '@mantine/hooks';
import { extractMargins } from '@mantine/styles';
import { useCollapse } from './use-collapse.js';
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
function Collapse(_a) {
  var _b = _a, {
    children,
    in: opened,
    transitionDuration = 200,
    transitionTimingFunction = "ease",
    style,
    onTransitionEnd,
    animateOpacity = true
  } = _b, others = __objRest(_b, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity"
  ]);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const { margins, rest } = extractMargins(others);
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ React.createElement(Box, __spreadValues({}, rest), children) : null;
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({}, getCollapseProps(__spreadValues(__spreadValues({ style }, rest), margins))), /* @__PURE__ */ React.createElement("div", {
    style: {
      opacity: opened || !animateOpacity ? 1 : 0,
      transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none"
    }
  }, children));
}
Collapse.displayName = "@mantine/core/Collapse";

export { Collapse };
//# sourceMappingURL=Collapse.js.map
