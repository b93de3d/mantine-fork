'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Highlight, {
    highlight: ["this", "that"]
  }, "Highlight this and also that");
}
const multiple = {
  type: "demo",
  code,
  component: Demo
};

exports.multiple = multiple;
//# sourceMappingURL=multiple.js.map
