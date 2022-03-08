'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Default placeholder
<Avatar src={null} alt="no image here" />

// Default placeholder with custom color
<Avatar src={null} alt="no image here" color="indigo" />

// Placeholder with initials
<Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

// Placeholder with custom icon
<Avatar color="blue" radius="xl">
  <StarIcon />
</Avatar>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: null,
    alt: "no image here"
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: null,
    alt: "no image here",
    color: "indigo"
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: null,
    alt: "no image here",
    color: "red"
  }, "VR"), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "blue",
    radius: "xl"
  }, /* @__PURE__ */ React__default.createElement(radixIcons.StarIcon, {
    style: { width: 24, height: 24 }
  }))));
}
const placeholders = {
  type: "demo",
  code,
  component: Demo
};

exports.placeholders = placeholders;
//# sourceMappingURL=placeholders.js.map
