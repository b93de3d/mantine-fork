'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ScrollArea style={{ width: 300, height: 200 }}>
  <div style={{ width: 600 }}>
    {/* ... content */}
  </div>
</ScrollArea>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, {
    style: { width: 300, height: 200 }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 600 }
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null))));
}
const horizontal = {
  type: "demo",
  component: Demo,
  code
};

exports.horizontal = horizontal;
//# sourceMappingURL=horizontal.js.map
