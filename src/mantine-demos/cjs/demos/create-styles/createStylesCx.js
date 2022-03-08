'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    border: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm}px \${theme.spacing.lg}px\`,
    cursor: 'pointer',
    margin: theme.spacing.md,
  },

  active: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    color: theme.white,
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  button: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
    border: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    cursor: "pointer",
    margin: theme.spacing.md
  },
  active: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    color: theme.white
  }
}));
function Demo() {
  const [active, setActive] = React.useState(0);
  const { classes, cx } = useStyles();
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("button", {
    className: cx(classes.button, { [classes.active]: active === 0 }),
    onClick: () => setActive(0),
    type: "button"
  }, "First"), /* @__PURE__ */ React__default.createElement("button", {
    className: cx(classes.button, { [classes.active]: active === 1 }),
    onClick: () => setActive(1),
    type: "button"
  }, "Second"));
}
const createStylesCx = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesCx = createStylesCx;
//# sourceMappingURL=createStylesCx.js.map
