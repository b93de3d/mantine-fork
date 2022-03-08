'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.blue[6]} !important\`,
  },
}));


function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Calendar
      disableOutsideEvents
      initialMonth={new Date(2021, 7)}
      dayClassName={(date, modifiers) =>
        cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
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
  }
}));
function Demo() {
  const { classes, cx } = useStyles();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Calendar, {
    disableOutsideEvents: true,
    initialMonth: new Date(2021, 7),
    dayClassName: (date, modifiers2) => cx({ [classes.outside]: modifiers2.outside, [classes.weekend]: modifiers2.weekend })
  }));
}
const modifiers = {
  type: "demo",
  code,
  component: Demo
};

exports.modifiers = modifiers;
//# sourceMappingURL=modifiers.js.map
