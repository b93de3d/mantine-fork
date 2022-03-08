import React from 'react';
import { Group, Badge } from '@mantine/core';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
const CustomComponent = ({ pads, children, ...others }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

<Badge component="a" href="https://mantine.dev" variant="outline">
  Link badge
</Badge>

<Badge component={CustomComponent} pads="$$$" variant="filled">
  Get lots of money
</Badge>
`;
const CustomComponent = (_a) => {
  var _b = _a, { pads, children } = _b, others = __objRest(_b, ["pads", "children"]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({}, others), pads, " ", children, " ", pads);
};
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    component: "a",
    href: "https://mantine.dev",
    variant: "outline"
  }, "Link badge"), /* @__PURE__ */ React.createElement(Badge, {
    component: CustomComponent,
    pads: "$$$",
    variant: "filled"
  }, "Get lots of money"));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=component.js.map
