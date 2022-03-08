'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<NativeSelect rightSection={<ChevronDownIcon />} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.NativeSelect, {
    label: "Your favorite library/framework",
    placeholder: "Your favorite library/framework",
    data: ["React", "Angular", "Svelte", "Vue"],
    rightSection: /* @__PURE__ */ React__default.createElement(radixIcons.ChevronDownIcon, null)
  }));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

exports.rightSection = rightSection;
//# sourceMappingURL=rightSection.js.map
