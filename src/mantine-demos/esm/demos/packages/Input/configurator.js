import React from 'react';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';

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
const codeTemplate = (props) => `<Input
  icon={<MailIcon />}
 ${props}
/>`;
const iconSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 22,
  xl: 24
};
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(Input, __spreadValues({
    icon: /* @__PURE__ */ React.createElement(EnvelopeClosedIcon, {
      style: { width: iconSizes[props.size], height: iconSizes[props.size] }
    })
  }, props)),
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "variant",
      type: "segmented",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "placeholder", type: "string", initialValue: "Your email" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "invalid", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
