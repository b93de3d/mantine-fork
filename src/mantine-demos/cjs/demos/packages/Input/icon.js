'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Input
  icon={<TwitterLogoIcon />}
  placeholder="Your twitter"
  rightSection={rightSection}
  rightSectionWidth={70}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: "blue",
    variant: "filled"
  }, "new");
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.TwitterLogoIcon, null),
    placeholder: "Your twitter",
    rightSection,
    rightSectionWidth: 70,
    styles: { rightSection: { pointerEvents: "none" } }
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=icon.js.map
