import React from 'react';
import { BaseDemo } from './_base.js';

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
  return /* @__PURE__ */ React.createElement(BaseDemo, __spreadProps(__spreadValues({}, props), {
    initialItem: 0
  }));
}
const codeTemplate = (props) => `<Accordion${props}>
  <Accordion.Item label="Customization">
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </Accordion.Item>

  <Accordion.Item label="Flexibility">
    Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
  </Accordion.Item>

  <Accordion.Item label="No annoying focus ring">
    With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
  </Accordion.Item>
</Accordion>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "iconPosition",
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "left",
      defaultValue: "left"
    },
    {
      name: "iconSize",
      type: "number",
      initialValue: 24,
      defaultValue: 24,
      min: 10,
      max: 40,
      step: 4
    },
    { name: "offsetIcon", type: "boolean", initialValue: true, defaultValue: true },
    { name: "disableIconRotation", type: "boolean", initialValue: false, defaultValue: false },
    { name: "multiple", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
