'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<RangeCalendar amountOfMonths={2} />
`;
function Demo() {
  const [value, setValue] = React.useState([new Date(2021, 11, 1), new Date(2022, 0, 15)]);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    smallerThan: "md",
    styles: { display: "none" }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.RangeCalendar, {
    amountOfMonths: 2,
    value,
    onChange: setValue,
    initialMonth: new Date(2021, 11, 1)
  }))), /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    largerThan: "md",
    styles: { display: "none" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Demo is not available, increase viewport size to see it")));
}
const multipleMonths = {
  type: "demo",
  code,
  component: Demo
};

exports.multipleMonths = multipleMonths;
//# sourceMappingURL=multipleMonths.js.map
