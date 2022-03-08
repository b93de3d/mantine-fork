'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _logo = require('./_logo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Brand() {
  const theme = core.useMantineTheme();
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement("div", {
    style: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      paddingBottom: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "apart"
  }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(_logo.LogoWhite, null) : /* @__PURE__ */ React__default.createElement(_logo.Logo, null), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "default",
    onClick: () => toggleColorScheme(),
    size: 30
  }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(radixIcons.SunIcon, null) : /* @__PURE__ */ React__default.createElement(radixIcons.MoonIcon, null))));
}

exports.Brand = Brand;
//# sourceMappingURL=_brand.js.map
