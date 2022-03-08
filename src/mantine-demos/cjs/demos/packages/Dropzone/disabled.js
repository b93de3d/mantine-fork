'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { createStyles } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

// Add your own disabled styles
const useStyles = createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: 'not-allowed',

    '& *': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Dropzone disabled className={classes.disabled}>
      {/* children, see previous demo */}
    </Dropzone>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: "not-allowed",
    "& *": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    disabled: true,
    className: classes.disabled
  });
}
const disabled = {
  type: "demo",
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
