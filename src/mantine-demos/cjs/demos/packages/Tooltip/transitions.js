'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const transitions2 = core.AVAILABLE_TRANSITIONS.map((transition) => /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    key: transition,
    label: transition,
    transition,
    transitionDuration: 300
  }, /* @__PURE__ */ React__default.createElement(core.Badge, null, transition)));
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, transitions2);
}
const transitions = {
  type: "demo",
  component: Demo
};

exports.Demo = Demo;
exports.transitions = transitions;
//# sourceMappingURL=transitions.js.map
