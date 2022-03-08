'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const [checked, setChecked] = React.useState(true);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    spacing: "xs"
  }, /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    component: "a",
    href: "https://mantine.dev",
    color: theme.colors.blue[6]
  }), /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    component: "button",
    color: theme.colors.grape[6],
    onClick: () => setChecked((c) => !c),
    style: { color: "#fff", cursor: "pointer" }
  }, checked && /* @__PURE__ */ React__default.createElement(radixIcons.CheckIcon, null)));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=component.js.map
