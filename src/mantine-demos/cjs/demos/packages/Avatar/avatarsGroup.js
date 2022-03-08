'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<AvatarsGroup limit={3}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
  <Avatar src="avatar.png" />
  {/* ...other items */}
</AvatarsGroup>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.AvatarsGroup, {
    spacing: "lg",
    limit: 3
  }, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    component: "a",
    href: "https://github.com/rtivital",
    src: _mockdata.avatars[0],
    alt: "it's me"
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "blue",
    radius: "xl",
    src: _mockdata.avatars[1]
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    radius: "xl",
    src: _mockdata.avatars[2]
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "cyan",
    radius: "xl",
    src: _mockdata.avatars[2]
  }), /* @__PURE__ */ React__default.createElement(core.Avatar, {
    color: "cyan",
    radius: "xl",
    src: _mockdata.avatars[2]
  })));
}
const avatarsGroup = {
  type: "demo",
  code,
  component: Demo
};

exports.avatarsGroup = avatarsGroup;
//# sourceMappingURL=avatarsGroup.js.map
