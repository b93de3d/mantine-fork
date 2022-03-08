'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DatePicker placeholder="Pick date" label="Event date" clearable={false} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    clearable: false
  }));
}
const notClearable = {
  type: "demo",
  code,
  component: Demo
};

exports.notClearable = notClearable;
//# sourceMappingURL=notClearable.js.map
