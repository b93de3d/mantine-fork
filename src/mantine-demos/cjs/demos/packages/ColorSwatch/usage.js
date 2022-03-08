'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    key: color,
    color: theme.colors[color][6]
  }));
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    spacing: "xs"
  }, swatches);
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
