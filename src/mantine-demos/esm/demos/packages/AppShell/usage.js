import React from 'react';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useMantineColorScheme, AppShell, Navbar, Header, Group, ActionIcon } from '@mantine/core';
import { MainLinks } from './_mainLinks.js';
import { User } from './_user.js';
import { LogoWhite, Logo } from './_logo.js';

const code = `
import { AppShell, Navbar, Header } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} padding="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} padding="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
`;
function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(AppShell, {
    padding: "md",
    navbar: /* @__PURE__ */ React.createElement(Navbar, {
      width: { base: 300 },
      height: 500,
      padding: "xs"
    }, /* @__PURE__ */ React.createElement(Navbar.Section, {
      grow: true,
      mt: "xs"
    }, /* @__PURE__ */ React.createElement(MainLinks, null)), /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(User, null))),
    header: /* @__PURE__ */ React.createElement(Header, {
      height: 60
    }, /* @__PURE__ */ React.createElement(Group, {
      style: {
        height: "100%",
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
      position: "apart"
    }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(LogoWhite, null) : /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(ActionIcon, {
      variant: "default",
      onClick: () => toggleColorScheme(),
      size: 30
    }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(SunIcon, null) : /* @__PURE__ */ React.createElement(MoonIcon, null)))),
    styles: (theme) => ({
      main: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    })
  }, "Your application goes here");
}
const usage = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

export { usage };
//# sourceMappingURL=usage.js.map
