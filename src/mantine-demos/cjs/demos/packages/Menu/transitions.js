'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Menu
  transition="rotate-right"
  transitionDuration={100}
  transitionTimingFunction="ease"
>
  {/* Menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, {
    transition: "rotate-right",
    transitionDuration: 100,
    transitionTimingFunction: "ease"
  }, _menuItems.menuItems));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=transitions.js.map
