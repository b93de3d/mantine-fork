'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles, keyframes } from '@mantine/core';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: \`\${bounce} 3s ease-in-out infinite\`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
`;
const bounce = core.keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -30px, 0)" },
  "70%": { transform: "translate3d(0, -15px, 0)" },
  "90%": { transform: "translate3d(0, -4px, 0)" }
});
const useStyles = core.createStyles((theme) => ({
  container: {
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", {
    className: classes.container
  }, "Keyframes demo");
}
const createStylesKeyframes = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesKeyframes = createStylesKeyframes;
//# sourceMappingURL=createStylesKeyframes.js.map
