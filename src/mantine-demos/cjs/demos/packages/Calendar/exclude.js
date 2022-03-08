'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Calendar
  excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
/>
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Calendar, {
    value,
    onChange: setValue,
    excludeDate: (date) => date.getDay() === 0 || date.getDay() === 6
  }));
}
const exclude = {
  type: "demo",
  code,
  component: Demo
};

exports.exclude = exclude;
//# sourceMappingURL=exclude.js.map
