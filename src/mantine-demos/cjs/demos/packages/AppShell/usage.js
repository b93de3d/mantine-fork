'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _mainLinks = require('./_mainLinks.js');
var _user = require('./_user.js');
var _logo = require('./_logo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.AppShell, {
    padding: "md",
    navbar: /* @__PURE__ */ React__default.createElement(core.Navbar, {
      width: { base: 300 },
      height: 500,
      padding: "xs"
    }, /* @__PURE__ */ React__default.createElement(core.Navbar.Section, {
      grow: true,
      mt: "xs"
    }, /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null)), /* @__PURE__ */ React__default.createElement(core.Navbar.Section, null, /* @__PURE__ */ React__default.createElement(_user.User, null))),
    header: /* @__PURE__ */ React__default.createElement(core.Header, {
      height: 60
    }, /* @__PURE__ */ React__default.createElement(core.Group, {
      style: {
        height: "100%",
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
      position: "apart"
    }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(_logo.LogoWhite, null) : /* @__PURE__ */ React__default.createElement(_logo.Logo, null), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
      variant: "default",
      onClick: () => toggleColorScheme(),
      size: 30
    }, colorScheme === "dark" ? /* @__PURE__ */ React__default.createElement(radixIcons.SunIcon, null) : /* @__PURE__ */ React__default.createElement(radixIcons.MoonIcon, null)))),
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

exports.usage = usage;
//# sourceMappingURL=usage.js.map
