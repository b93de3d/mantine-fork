import React from 'react';
import { useMantineTheme, ColorSwatch, Group } from '@mantine/core';

const code = `
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => /* @__PURE__ */ React.createElement(ColorSwatch, {
    key: color,
    color: theme.fn.rgba(theme.colors[color][6], 0.5)
  }));
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    spacing: "xs"
  }, swatches);
}
const transparent = {
  type: "demo",
  code,
  component: Demo
};

export { transparent };
//# sourceMappingURL=transparent.js.map
