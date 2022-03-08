'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const disableTransitions = {
  type: "demo",
  component: () => /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    transitionDuration: 0,
    sx: { maxWidth: 560 },
    mx: "auto"
  }),
  code: "<Accordion transitionDuration={0} />"
};
const customTransitions = {
  type: "demo",
  component: () => /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    transitionDuration: 1e3,
    sx: { maxWidth: 560 },
    mx: "auto"
  }),
  code: "<Accordion transitionDuration={1000} /> // -> 1000ms transition duration"
};

exports.customTransitions = customTransitions;
exports.disableTransitions = disableTransitions;
//# sourceMappingURL=transitions.js.map
