'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = "<Progress value={75} animate />";
function Label() {
  return /* @__PURE__ */ React__default.createElement(core.Progress, {
    value: 75,
    animate: true
  });
}
const animations = {
  type: "demo",
  code,
  component: Label
};

exports.animations = animations;
//# sourceMappingURL=animations.js.map
