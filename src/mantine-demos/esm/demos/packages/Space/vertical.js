import React from 'react';
import { Text, Space } from '@mantine/core';

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
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(Text, null, "First part"), /* @__PURE__ */ React.createElement(Space, __spreadValues({}, props)), /* @__PURE__ */ React.createElement(Text, null, "Second part"));
}
const codeTemplate = (props) => `
<Text>First line</Text>
<Space${props} />
<Text>Second line</Text>
`;
const vertical = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "w", type: "size", initialValue: "md", defaultValue: 0 }]
};

export { vertical };
//# sourceMappingURL=vertical.js.map
