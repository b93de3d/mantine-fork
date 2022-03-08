'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Modal
  transition="fade"
  transitionDuration={600}
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = React.useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened: slowTransitionOpened,
    onClose: () => setSlowTransitionOpened(false),
    title: "Please consider this",
    transition: "rotate-left"
  }, "rotate-left transition"), /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened: noTransitionOpened,
    onClose: () => setNoTransitionOpened(false),
    title: "Please consider this",
    transition: "fade",
    transitionDuration: 600,
    transitionTimingFunction: "ease"
  }, "fade transition 600ms ease transition"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setSlowTransitionOpened(true),
    color: "pink"
  }, "Rotate left transition"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setNoTransitionOpened(true),
    color: "cyan"
  }, "Fade transition")));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=transitions.js.map
