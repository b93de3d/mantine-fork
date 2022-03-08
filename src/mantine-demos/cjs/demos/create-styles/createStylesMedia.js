'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${theme.breakpoints.xl}px)\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`;
const useStyles = core.createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6]
    },
    "@media (max-width: 800px)": {
      backgroundColor: theme.colors.orange[6]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", {
    className: classes.container
  });
}
const createStylesMedia = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesMedia = createStylesMedia;
//# sourceMappingURL=createStylesMedia.js.map
