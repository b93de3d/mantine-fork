'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
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
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Gallery",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ImageIcon, null)
  }, "Gallery tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Messages",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ChatBubbleIcon, null)
  }, "Messages tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Settings",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.MixerVerticalIcon, null)
  }, "Settings tab content"));
}
const codeTemplate = (props) => `<Tabs${props}>
  <Tabs.Tab label="Gallery" icon={<ImageIcon />}>Gallery tab content</Tabs.Tab>
  <Tabs.Tab label="Messages" icon={<ChatBubbleIcon />}>Messages tab content</Tabs.Tab>
  <Tabs.Tab label="Settings" icon={<MixerVerticalIcon />}>Settings tab content</Tabs.Tab>
</Tabs>`;
const colorsConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    {
      name: "variant",
      type: "segmented",
      initialValue: "default",
      defaultValue: "default",
      data: [
        { value: "default", label: "Default" },
        { value: "outline", label: "Outline" },
        { value: "pills", label: "Pills" }
      ]
    },
    { name: "tabPadding", type: "size", initialValue: "xs", defaultValue: "xs" },
    {
      name: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      defaultValue: "horizontal",
      data: [
        { value: "horizontal", label: "Horizontal" },
        { value: "vertical", label: "Vertical" }
      ]
    }
  ]
};

exports.colorsConfigurator = colorsConfigurator;
//# sourceMappingURL=colorsConfigurator.js.map
