'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var octiconsReact = require('@primer/octicons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Blockquote
  cite="\u2013 Your poor i3 from 2012 struggling its best"
  icon={<FlameIcon size={20} />}
>
  webpack built caa9bf3d1a0a0914ed84 in 28259ms
</Blockquote>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Blockquote, {
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: /* @__PURE__ */ React__default.createElement(octiconsReact.FlameIcon, {
      size: 20
    })
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms"));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=icon.js.map
