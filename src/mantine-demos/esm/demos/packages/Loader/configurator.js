import React from 'react';
import { Group, Loader } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Loader, __spreadValues({}, props)));
}
const codeTemplate = (props) => `<Loader${props} />`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    {
      name: "variant",
      type: "segmented",
      initialValue: "oval",
      defaultValue: "oval",
      data: [
        { value: "oval", label: "Oval" },
        { value: "bars", label: "Bars" },
        { value: "dots", label: "Dots" }
      ]
    }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
