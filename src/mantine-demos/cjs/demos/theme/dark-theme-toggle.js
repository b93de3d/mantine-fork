'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var radixIcons = require('@modulz/radix-icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}`;
function Demo() {
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  const dark = colorScheme === "dark";
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "outline",
    color: dark ? "yellow" : "blue",
    onClick: () => toggleColorScheme(),
    title: "Toggle color scheme"
  }, dark ? /* @__PURE__ */ React__default.createElement(radixIcons.SunIcon, {
    style: { width: 18, height: 18 }
  }) : /* @__PURE__ */ React__default.createElement(radixIcons.MoonIcon, {
    style: { width: 18, height: 18 }
  })));
}
const darkThemeToggle = {
  type: "demo",
  component: Demo,
  code
};

exports.darkThemeToggle = darkThemeToggle;
//# sourceMappingURL=dark-theme-toggle.js.map
