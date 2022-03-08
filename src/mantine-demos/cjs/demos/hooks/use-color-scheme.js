'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;
function Demo() {
  const colorScheme = hooks.useColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: colorScheme === "dark" ? "blue" : "teal",
    variant: "filled"
  }, "Your system color scheme is ", colorScheme));
}
const useColorSchemeHooks = {
  type: "demo",
  code,
  component: Demo
};

exports.useColorSchemeHooks = useColorSchemeHooks;
//# sourceMappingURL=use-color-scheme.js.map
