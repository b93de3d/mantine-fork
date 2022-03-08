'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Button
  component="a"
  href="https://mantine.dev"
  target="_blank"
  variant="outline"
  leftIcon={<ExternalLinkIcon />}
>
  Mantine docs
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank",
    variant: "outline",
    leftIcon: /* @__PURE__ */ React__default.createElement(radixIcons.ExternalLinkIcon, null)
  }, "Mantine docs"));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=component.js.map
