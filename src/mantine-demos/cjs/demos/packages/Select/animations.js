'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Select
  transition="pop-top-left"
  transitionDuration={80}
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    transition: "pop-top-left",
    transitionDuration: 80,
    transitionTimingFunction: "ease"
  }));
}
const animations = {
  type: "demo",
  code,
  component: Demo
};

exports.animations = animations;
//# sourceMappingURL=animations.js.map
