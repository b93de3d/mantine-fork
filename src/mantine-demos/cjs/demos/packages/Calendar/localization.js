'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('dayjs/locale/ru');
var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = '<Calendar locale="ru" />';
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Calendar, {
    value,
    onChange: setValue,
    locale: "ru"
  }));
}
const localization = {
  type: "demo",
  code,
  component: Demo
};

exports.localization = localization;
//# sourceMappingURL=localization.js.map
