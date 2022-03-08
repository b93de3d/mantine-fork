'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Menu, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu items... */}
    </Menu>
  );
}
`;
const useStyles = core.createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white
  }
}));
function Demo() {
  const { classes } = useStyles();
  const items = [..._menuItems.menuItems];
  items.splice(4, 1);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, {
    classNames: classes
  }, items));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=stylesApi.js.map
