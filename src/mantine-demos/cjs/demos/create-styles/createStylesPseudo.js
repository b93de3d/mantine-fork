'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm}px \${theme.spacing.lg}px\`,
    cursor: 'pointer',
    margin: theme.spacing.md,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:not(:first-of-type)': {
      backgroundColor: theme.colors.violet[6],

      // pseudo-classes can be nested
      '&:hover': {
        backgroundColor: theme.colors.violet[9],
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div>
      <button type="button" className={classes.button}>
        First
      </button>
      <button type="button" className={classes.button}>
        Second
      </button>
      <button type="button" className={classes.button}>
        Third
      </button>
    </div>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    cursor: "pointer",
    margin: theme.spacing.md,
    "&:hover": {
      backgroundColor: theme.colors.blue[9]
    },
    "&:not(:first-of-type)": {
      backgroundColor: theme.colors.violet[6],
      "&:hover": {
        backgroundColor: theme.colors.violet[9]
      }
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("button", {
    type: "button",
    className: classes.button
  }, "First"), /* @__PURE__ */ React__default.createElement("button", {
    type: "button",
    className: classes.button
  }, "Second"), /* @__PURE__ */ React__default.createElement("button", {
    type: "button",
    className: classes.button
  }, "Third"));
}
const createStylesPseudo = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesPseudo = createStylesPseudo;
//# sourceMappingURL=createStylesPseudo.js.map
