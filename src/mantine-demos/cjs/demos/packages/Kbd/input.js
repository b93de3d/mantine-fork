'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Kbd, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<MagnifyingGlassIcon />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React__default.createElement(core.Kbd, null, "Ctrl"), /* @__PURE__ */ React__default.createElement("span", {
    style: { margin: "0 5px" }
  }, "+"), /* @__PURE__ */ React__default.createElement(core.Kbd, null, "K"));
  return /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: "Search",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.MagnifyingGlassIcon, null),
    rightSectionWidth: 90,
    rightSection,
    styles: { rightSection: { pointerEvents: "none" } }
  });
}
const input = {
  type: "demo",
  code,
  component: Demo
};

exports.input = input;
//# sourceMappingURL=input.js.map
