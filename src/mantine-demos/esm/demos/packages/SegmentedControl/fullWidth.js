import React from 'react';
import { SegmentedControlWrapper } from './Wrapper.js';

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
function Demo(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SegmentedControlWrapper, __spreadValues({}, props)));
}
const codeTemplate = (props) => `
  <SegmentedControl ${props} />
`;
const fullWidth = {
  type: "configurator",
  component: Demo,
  codeTemplate,
  configurator: [
    { name: "fullWidth", type: "boolean", defaultValue: false },
    {
      name: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      defaultValue: "horizontal",
      data: [
        { label: "horizontal", value: "horizontal" },
        { label: "vertical", value: "vertical" }
      ]
    }
  ]
};

export { fullWidth };
//# sourceMappingURL=fullWidth.js.map
