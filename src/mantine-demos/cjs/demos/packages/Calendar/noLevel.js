'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = "<Calendar allowLevelChange={false} />";
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Calendar, {
    value: null,
    allowLevelChange: false
  }));
}
const noLevel = {
  type: "demo",
  code,
  component: Demo
};

exports.noLevel = noLevel;
//# sourceMappingURL=noLevel.js.map
