'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Month hideWeekdays />
`;
function Demo() {
  const [value, setValue] = React.useState(new Date());
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Month, {
    month: value,
    value,
    onChange: setValue,
    hideWeekdays: true
  }));
}
const weekdays = {
  type: "demo",
  code,
  component: Demo
};

exports.weekdays = weekdays;
//# sourceMappingURL=weekdays.js.map
