'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Input
  variant="headless"
  placeholder="Add your own styles with styles API"
  icon={<TwitterLogoIcon />}
  rightSection="$"
  styles={{
    input: {
      width: '100%',
      boxSizing: 'border-box',
    }
  }}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    styles: { input: { width: "100%", boxSizing: "border-box" } },
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.TwitterLogoIcon, null),
    rightSection: "$",
    variant: "headless",
    placeholder: "Add your own styles with styles API"
  });
}
const headless = {
  type: "demo",
  code,
  component: Demo
};

exports.headless = headless;
//# sourceMappingURL=headless.js.map
