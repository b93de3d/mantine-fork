'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('dayjs/locale/ru');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DatePicker
  locale="ru"
  placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"
  label="\u0414\u0430\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F"
  defaultValue={new Date()}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    locale: "ru",
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",
    label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F",
    defaultValue: new Date()
  }));
}
const localization = {
  type: "demo",
  code,
  component: Demo
};

exports.localization = localization;
//# sourceMappingURL=localization.js.map
