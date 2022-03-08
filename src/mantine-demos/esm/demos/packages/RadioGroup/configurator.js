import React from 'react';
import { RadioGroup, Radio } from '@mantine/core';

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
const codeTemplate = (props) => `<RadioGroup
 ${props}
>
  <Radio value="react">React</Radio>
  <Radio value="svelte">Svelte</Radio>
  <Radio value="ng">Angular</Radio>
  <Radio value="vue">Vue</Radio>
</RadioGroup>`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(RadioGroup, __spreadValues({
    defaultValue: "react"
  }, props), /* @__PURE__ */ React.createElement(Radio, {
    value: "react"
  }, "React"), /* @__PURE__ */ React.createElement(Radio, {
    value: "svelte"
  }, "Svelte"), /* @__PURE__ */ React.createElement(Radio, {
    value: "ng"
  }, "Angular"), /* @__PURE__ */ React.createElement(Radio, {
    value: "vue"
  }, "Vue"));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "variant",
      type: "segmented",
      data: [
        { label: "horizontal", value: "horizontal" },
        { label: "vertical", value: "vertical" }
      ],
      initialValue: "horizontal",
      defaultValue: "horizontal"
    },
    { name: "label", type: "string", initialValue: "Select your favorite framework/library" },
    { name: "description", type: "string", initialValue: "This is anonymous" },
    { name: "error", type: "string", initialValue: "" },
    { name: "spacing", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "required", type: "boolean", initialValue: true, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
