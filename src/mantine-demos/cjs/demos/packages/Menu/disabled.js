'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Menu>
  <Menu.Item disabled icon={<MagnifyingGlassIcon width={14} height={14} />}>
    Search
  </Menu.Item>
  {/* ...other items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, null, _menuItems.menuItems.slice(0, 4), /* @__PURE__ */ React__default.createElement(core.Menu.Item, {
    disabled: true,
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.MagnifyingGlassIcon, {
      width: 14,
      height: 14
    })
  }, "Search"), _menuItems.menuItems.slice(5)));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
