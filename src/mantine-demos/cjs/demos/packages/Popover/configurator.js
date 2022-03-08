'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", justifyContent: "center", alignItems: "flex-end", height: 200 }
  }, /* @__PURE__ */ React__default.createElement(core.Popover, __spreadValues({
    opened: true,
    position: "top",
    placement: "center",
    withArrow: true,
    noFocusTrap: true,
    noEscape: true,
    width: 260,
    styles: { body: { pointerEvents: "none" } },
    transition: "slide-up",
    target: /* @__PURE__ */ React__default.createElement(core.Badge, null, "Badge with popover")
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg",
    width: 30,
    height: 30,
    sx: { minWidth: 30 },
    mr: "md"
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm"
  }, "Thanks for stopping by and checking Mantine, you are awesome!"))));
}
const codeTemplate = (props) => `<Popover
  opened
  target={<Badge>Badge with popover</Badge>}
 ${props}
>
  {/* children */}
</Popover>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "spacing", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "shadow", type: "size", initialValue: "sm", defaultValue: "sm" }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
