import React from 'react';
import { TimelineBase } from './_base.js';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(TimelineBase, __spreadValues({
    noIcon: true
  }, props)));
}
const codeTemplate = (props) => `<Timeline${props}>
  {/* items */}
</Timeline>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "radius", type: "size", initialValue: "xl", defaultValue: "xl" },
    { name: "active", type: "number", initialValue: 1, defaultValue: null, min: -1, max: 3 },
    { name: "reverseActive", type: "boolean", initialValue: false, defaultValue: false },
    { name: "lineWidth", type: "number", initialValue: 4, defaultValue: 4, min: 1, max: 8 },
    {
      name: "bulletSize",
      type: "number",
      initialValue: 20,
      defaultValue: 20,
      min: 12,
      max: 30,
      step: 2
    },
    {
      name: "align",
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "left",
      defaultValue: "left"
    }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
