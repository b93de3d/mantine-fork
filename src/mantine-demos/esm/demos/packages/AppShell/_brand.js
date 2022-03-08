import React from 'react';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useMantineTheme, useMantineColorScheme, Group, ActionIcon } from '@mantine/core';
import { LogoWhite, Logo } from './_logo.js';

function Brand() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      paddingBottom: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
    }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "apart"
  }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(LogoWhite, null) : /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "default",
    onClick: () => toggleColorScheme(),
    size: 30
  }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(SunIcon, null) : /* @__PURE__ */ React.createElement(MoonIcon, null))));
}

export { Brand };
//# sourceMappingURL=_brand.js.map
