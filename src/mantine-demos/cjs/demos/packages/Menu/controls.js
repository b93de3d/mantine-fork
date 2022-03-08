'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Menu control={<button type="button">Button control</button>}>
  {/* Menu items */}
</Menu>

<Menu control={<Button>Mantine Button</Button>}>
  {/* Menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, {
    control: /* @__PURE__ */ React__default.createElement("button", {
      type: "button"
    }, "Button control")
  }, _menuItems.menuItems), /* @__PURE__ */ React__default.createElement(core.Menu, {
    control: /* @__PURE__ */ React__default.createElement(core.Button, null, "Mantine Button")
  }, _menuItems.menuItems));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

exports.controls = controls;
//# sourceMappingURL=controls.js.map
