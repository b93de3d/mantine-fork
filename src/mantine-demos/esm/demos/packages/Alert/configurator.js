import React from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { Alert } from '@mantine/core';

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
  }, /* @__PURE__ */ React.createElement(Alert, __spreadProps(__spreadValues({}, props), {
    icon: /* @__PURE__ */ React.createElement(XCircleFillIcon, {
      size: 16
    })
  })));
}
const codeTemplate = (props, children) => `<Alert icon={<XCircleFillIcon size={16} />}${props}>
  ${children}
</Alert>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "title", type: "string", initialValue: "Bummer!" },
    {
      name: "children",
      type: "string",
      initialValue: "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!"
    },
    { name: "color", type: "color", initialValue: "red", defaultValue: "blue" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "withCloseButton", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "variant",
      type: "segmented",
      data: [
        { label: "light", value: "light" },
        { label: "filled", value: "filled" },
        { label: "outline", value: "outline" }
      ],
      initialValue: "light",
      defaultValue: "light"
    }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
