'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<div style={{ width: 240, margin: 'auto' }}>
  <Image
    radius="md"
    src="https://images.unsplash.com/long-image-url-was-here.jpg"
    alt="Random unsplash image"
    caption="My dog begging for treats"
  />
</div>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 240, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    radius: "md",
    src: "https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",
    alt: "Random unsplash image",
    caption: "My dog begging for treats"
  }));
}
const caption = {
  type: "demo",
  code,
  component: Demo
};

exports.caption = caption;
//# sourceMappingURL=caption.js.map
