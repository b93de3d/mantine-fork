'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ActionIcon variant="transparent"><GearIcon /></ActionIcon>
<ActionIcon variant="hover"><GearIcon /></ActionIcon>
<ActionIcon variant="default"><GearIcon /></ActionIcon>
<ActionIcon variant="outline"><GearIcon /></ActionIcon>
<ActionIcon variant="filled"><GearIcon /></ActionIcon>
<ActionIcon variant="light"><GearIcon /></ActionIcon>
`;
const icon = /* @__PURE__ */ React__default.createElement(radixIcons.GearIcon, {
  style: { width: 16, height: 16 }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "transparent",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "hover",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "default",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "outline",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "filled",
    color: "blue"
  }, icon), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "light",
    color: "blue"
  }, icon));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.variants = variants;
//# sourceMappingURL=variants.js.map
