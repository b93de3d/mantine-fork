import React from 'react';
import { NativeSelect } from '@mantine/core';

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
const data = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" }
];
const codeTemplate = (props) => `<NativeSelect
  data={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]}
 ${props}
/>`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(NativeSelect, __spreadProps(__spreadValues({}, props), {
    data
  })),
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Pick one" },
    {
      name: "label",
      type: "string",
      initialValue: "Select your favorite framework/library"
    },
    {
      name: "description",
      type: "string",
      initialValue: "This is anonymous"
    },
    {
      name: "error",
      type: "string",
      initialValue: ""
    },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "required",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
