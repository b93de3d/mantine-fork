'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Box
  component="a"
  href="https://mantine.dev"
  target="_blank"
  sx={(theme) => ({
    display: 'block',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[7],
    textAlign: 'center',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  })}
>
  Set component prop to style different elements
</Box>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank",
    sx: (theme) => ({
      display: "block",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.colors.blue[4] : theme.colors.blue[7],
      textAlign: "center",
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }
    })
  }, "Set component prop to style different elements");
}
const link = {
  type: "demo",
  component: Demo,
  code
};

exports.link = link;
//# sourceMappingURL=link.js.map
