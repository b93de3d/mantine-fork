'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// With image
<Avatar src="avatar.png" alt="it's me" />

// Default placeholder
<Avatar radius="xl" />

// Letters with xl radius
<Avatar color="cyan" radius="xl">MK</Avatar>

// Custom placeholder icon
<Avatar color="blue" radius="sm">
  <StarIcon style={{ width: 24, height: 24 }} />
</Avatar>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: _mockdata.avatars[0],
    alt: "it's me"
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    radius: "xl"
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "cyan",
    radius: "xl"
  }, "MK"), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "blue",
    radius: "xl"
  }, /* @__PURE__ */ React__default.createElement(radixIcons.StarIcon, {
    style: { width: 24, height: 24 }
  })));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
