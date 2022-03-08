import React from 'react';
import { InputWrapper, Input } from '@mantine/core';

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
    style: { maxWidth: 440, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(InputWrapper, __spreadValues({
    id: "input-demo"
  }, props), /* @__PURE__ */ React.createElement(Input, {
    id: "input-demo",
    placeholder: "Your email",
    size: props.size
  })));
}
const codeTemplate = (props) => `<InputWrapper
  id="input-demo"
 ${props}
>
  <Input id="input-demo" placeholder="Your email" />
</InputWrapper>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "required",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    },
    {
      name: "label",
      type: "string",
      initialValue: "Credit card information"
    },
    {
      name: "description",
      type: "string",
      initialValue: "Please enter your credit card information, we need some money"
    },
    {
      name: "error",
      type: "string",
      initialValue: "Your credit card expired"
    },
    {
      name: "size",
      type: "size",
      initialValue: "sm",
      defaultValue: "sm"
    }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
