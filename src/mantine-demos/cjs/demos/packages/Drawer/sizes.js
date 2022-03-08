'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const [opened, setOpened] = React.useState(false);
  const [size, setSize] = React.useState("top");
  const open = (s) => {
    setSize(s);
    setOpened(true);
  };
  const controls = ["xs", "sm", "md", "lg", "xl", "full", 800, "25%"].map((s) => /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => open(s),
    key: s
  }, typeof s === "string" ? s : `${s}px`));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Drawer, {
    opened,
    onClose: () => setOpened(false),
    padding: "md",
    size,
    hideCloseButton: true
  }, "Press escape to close the drawer"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, controls));
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
