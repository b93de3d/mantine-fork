'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Menu trigger="hover" delay={500}>
  {/* ... menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, {
    trigger: "hover",
    delay: 500
  }, _menuItems.menuItems));
}
const hover = {
  type: "demo",
  code,
  component: Demo
};

exports.hover = hover;
//# sourceMappingURL=hover.js.map
