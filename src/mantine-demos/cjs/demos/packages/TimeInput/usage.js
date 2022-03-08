'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TimeInput label="What time is it now?" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Container, {
    size: 340
  }, /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    label: "What time is it now?"
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
