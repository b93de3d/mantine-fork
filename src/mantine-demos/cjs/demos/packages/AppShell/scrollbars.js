'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _user = require('./_user.js');
var _brand = require('./_brand.js');
var _mainLinks = require('./_mainLinks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Navbar, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} padding={10} width={{ base: 300 }}>
      <Navbar.Section mt="xs"><Brand /></Navbar.Section>

      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section><User /></Navbar.Section>
    </Navbar>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Navbar, {
    height: 600,
    padding: 10,
    width: { base: 300 }
  }, /* @__PURE__ */ React__default.createElement(core.Navbar.Section, {
    mt: "xs"
  }, /* @__PURE__ */ React__default.createElement(_brand.Brand, null)), /* @__PURE__ */ React__default.createElement(core.Navbar.Section, {
    grow: true,
    component: core.ScrollArea,
    ml: -10,
    mr: -10,
    sx: { paddingLeft: 10, paddingRight: 10 }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { paddingTop: 15, paddingBottom: 15 }
  }, /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null), /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null), /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null), /* @__PURE__ */ React__default.createElement(_mainLinks.MainLinks, null))), /* @__PURE__ */ React__default.createElement(core.Navbar.Section, null, /* @__PURE__ */ React__default.createElement(_user.User, null)));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

exports.scrollbars = scrollbars;
//# sourceMappingURL=scrollbars.js.map
