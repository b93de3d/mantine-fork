'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const child = getRef('child');

  return {
    wrapper: {
      // subscribe to color scheme changes right in your styles
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      maxWidth: 400,
      width: '100%',
      height: 180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.radius.sm,

      // Dynamic media queries, define breakpoints in theme, use anywhere
      [\`@media (max-width: \${theme.breakpoints.sm}px)\`]: {
        // Type safe child reference in nested selectors via ref
        [\`& .\${child}\`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },

    child: {
      // assign ref to element
      ref: child,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.sm,
      boxShadow: theme.shadows.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  };
});

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
`;
const useStyles = core.createStyles((theme, _params, getRef) => {
  const child = getRef("child");
  return {
    wrapper: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      maxWidth: 400,
      width: "100%",
      height: 180,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: theme.radius.sm,
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        [`& .${child}`]: {
          fontSize: theme.fontSizes.xs
        }
      }
    },
    child: {
      ref: child,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.sm,
      boxShadow: theme.shadows.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  };
});
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", {
    className: classes.wrapper
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.child
  }, "createStyles demo"));
}
const createStylesBasics = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesBasics = createStylesBasics;
//# sourceMappingURL=createStylesBasics.js.map
