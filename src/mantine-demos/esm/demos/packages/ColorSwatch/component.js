import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { useMantineTheme, Group, ColorSwatch } from '@mantine/core';

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
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    spacing: "xs"
  }, /* @__PURE__ */ React.createElement(ColorSwatch, {
    component: "a",
    href: "https://mantine.dev",
    color: theme.colors.blue[6]
  }), /* @__PURE__ */ React.createElement(ColorSwatch, {
    component: "button",
    color: theme.colors.grape[6],
    onClick: () => setChecked((c) => !c),
    style: { color: "#fff", cursor: "pointer" }
  }, checked && /* @__PURE__ */ React.createElement(CheckIcon, null)));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=component.js.map
