'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.blue[6]} !important\`,
  },

  selected: {
    color: \`\${theme.white} !important\`,
  },
}));


function Demo() {
  const { classes, cx } = useStyles();

  return (
    <DatePicker
      disableOutsideEvents
      placeholder="Pick date"
      label="Event date"
      dayClassName={(date, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
          [classes.selected]: modifiers.selected,
        })
      }
    />
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  outside: {
    opacity: 0
  },
  weekend: {
    color: `${theme.colors.blue[6]} !important`
  },
  selected: {
    color: `${theme.white} !important`
  }
}));
function Demo() {
  const { classes, cx } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    disableOutsideEvents: true,
    placeholder: "Pick date",
    label: "Event date",
    dayClassName: (date, modifiers2) => cx({
      [classes.outside]: modifiers2.outside,
      [classes.weekend]: modifiers2.weekend,
      [classes.selected]: modifiers2.selected
    })
  }));
}
const modifiers = {
  type: "demo",
  code,
  component: Demo
};

exports.modifiers = modifiers;
//# sourceMappingURL=modifiers.js.map
