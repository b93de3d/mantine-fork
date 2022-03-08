import React from 'react';
import { Chips, Chip } from '@mantine/core';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Chips, __spreadProps(__spreadValues({}, props), {
    position: "center",
    defaultValue: "react"
  }), /* @__PURE__ */ React.createElement(Chip, {
    value: "react"
  }, "React"), /* @__PURE__ */ React.createElement(Chip, {
    value: "ng"
  }, "Angular"), /* @__PURE__ */ React.createElement(Chip, {
    value: "svelte"
  }, "Svelte"), /* @__PURE__ */ React.createElement(Chip, {
    value: "vue"
  }, "Vue"));
}
const codeTemplate = (props) => `<Chips${props}>
  <Chip value="react">React</Chip>
  <Chip value="ng">Angular</Chip>
  <Chip value="svelte">Svelte</Chip>
  <Chip value="vue">Vue</Chip>
</Chips>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    {
      name: "variant",
      type: "segmented",
      data: [
        { value: "outline", label: "Outline" },
        { value: "filled", label: "Filled" }
      ],
      initialValue: "outline",
      defaultValue: "outline"
    },
    { name: "spacing", type: "size", initialValue: "xs", defaultValue: "xs" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "radius", type: "size", initialValue: "xl", defaultValue: "xl" }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
