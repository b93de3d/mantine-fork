import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

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
  const colorScheme = useColorScheme();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: colorScheme === "dark" ? "blue" : "teal",
    variant: "filled"
  }, "Your system color scheme is ", colorScheme));
}
const useColorSchemeHooks = {
  type: "demo",
  code,
  component: Demo
};

export { useColorSchemeHooks };
//# sourceMappingURL=use-color-scheme.js.map
