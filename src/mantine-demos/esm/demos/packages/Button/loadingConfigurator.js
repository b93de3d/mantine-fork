import React from 'react';
import { DatabaseIcon } from '@primer/octicons-react';
import { Group, Button } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, __spreadValues({
    leftIcon: /* @__PURE__ */ React.createElement(DatabaseIcon, {
      size: 14
    })
  }, props), props.loading ? "Connecting" : "Connect", " to database"));
}
const codeTemplate = (props) => `<Button leftIcon={<DatabaseIcon size={14} />}${props}>
  {loading ? 'Connecting' : 'Connect'} to database
</Button>`;
const loadingConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "loading", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "loaderPosition",
      capitalize: true,
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "left",
      defaultValue: "left"
    }
  ]
};

export { loadingConfigurator };
//# sourceMappingURL=loadingConfigurator.js.map
