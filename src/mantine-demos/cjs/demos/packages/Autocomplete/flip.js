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
const codeTemplate = (props) => `<Autocomplete ${props} />`;
const flip = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React__default.createElement(core.Autocomplete, __spreadValues({
    placeholder: "Pick one",
    label: "Your favorite framework/library",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }, props)),
  codeTemplate,
  configuratorProps: { multiline: false },
  configurator: [
    {
      name: "dropdownPosition",
      type: "segmented",
      data: [
        { label: "top", value: "top" },
        { label: "bottom", value: "bottom" },
        { label: "flip", value: "flip" }
      ],
      initialValue: "bottom",
      defaultValue: "bottom"
    }
  ]
};

exports.flip = flip;
//# sourceMappingURL=flip.js.map
