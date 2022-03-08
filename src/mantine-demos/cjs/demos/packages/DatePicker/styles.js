'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    dayStyle: (date) => date.getDay() === 5 && date.getDate() === 13 ? { backgroundColor: theme.colors.red[9], color: theme.white } : null
  }));
}
const styles = {
  type: "demo",
  code,
  component: Demo
};

exports.styles = styles;
//# sourceMappingURL=styles.js.map
