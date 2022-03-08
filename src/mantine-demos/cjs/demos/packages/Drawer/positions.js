'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const [opened, setOpened] = React.useState(false);
  const [position, setPosition] = React.useState("top");
  const open = (p) => {
    setPosition(p);
    setOpened(true);
  };
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Drawer, {
    opened,
    onClose: () => setOpened(false),
    padding: "md",
    position,
    hideCloseButton: true
  }, "Press escape to close the drawer"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => open("left")
  }, "Left"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => open("right")
  }, "Right"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => open("top")
  }, "Top"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => open("bottom")
  }, "Bottom")));
}
const positions = {
  type: "demo",
  component: Demo
};

exports.positions = positions;
//# sourceMappingURL=positions.js.map
