'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TimeInput clearable defaultValue={new Date()} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    label: "With a clear button",
    clearable: true,
    defaultValue: new Date()
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

exports.clearable = clearable;
//# sourceMappingURL=clearable.js.map
