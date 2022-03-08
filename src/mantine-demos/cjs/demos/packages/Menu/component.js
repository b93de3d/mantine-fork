'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Menu>
  <Menu.Item component="a" href="https://mantine.dev">
    Mantine website
  </Menu.Item>

  <Menu.Item
    icon={<ExternalLinkIcon />}
    component="a"
    href="https://mantine.dev"
    target="_blank"
  >
    External link
  </Menu.Item>
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, null, /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    component: "a",
    href: "https://mantine.dev"
  }, "Mantine website"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ExternalLinkIcon, null),
    component: "a",
    href: "https://mantine.dev",
    target: "_blank"
  }, "External link")));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=component.js.map
