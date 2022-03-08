'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Avatar
  component="a"
  href="https://github.com/rtivital"
  target="_blank"
  src="avatar.png"
  alt="it's me"
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    component: "a",
    href: "https://github.com/rtivital",
    target: "_blank",
    src: _mockdata.avatars[0],
    alt: "it's me"
  }));
}
const link = {
  type: "demo",
  code,
  component: Demo
};

exports.link = link;
//# sourceMappingURL=link.js.map
