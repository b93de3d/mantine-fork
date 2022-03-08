import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Notification } from '@mantine/core';
import { demoBase } from './_demo-base.js';

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
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(Notification, __spreadValues({
    onClose: () => {
    }
  }, props)), /* @__PURE__ */ React.createElement(Notification, __spreadValues({
    style: { marginTop: 15 },
    icon: /* @__PURE__ */ React.createElement(CheckIcon, null),
    onClose: () => {
    }
  }, props)));
}
const codeTemplate = (props, children) => `
<Notification${props}>
  ${children}
</Notification>

<Notification icon={<CheckIcon />}${props}>
  ${children}
</Notification>
`;
const configurator = __spreadProps(__spreadValues({}, demoBase), {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "loading", type: "boolean", initialValue: false, defaultValue: false },
    { name: "disallowClose", type: "boolean", initialValue: false, defaultValue: false },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "title",
      type: "string",
      initialValue: "We notify you that"
    },
    {
      name: "children",
      type: "string",
      initialValue: "You are now obligated to give a star to Mantine project on GitHub"
    }
  ]
});

export { configurator };
//# sourceMappingURL=configurator.js.map
