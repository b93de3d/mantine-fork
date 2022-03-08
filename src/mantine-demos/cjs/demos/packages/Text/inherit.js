'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Title order={3}>Highlight <Text color="blue" inherit component="span">something</Text>in title</Title>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Title, {
    order: 3
  }, "Title in which you want to", " ", /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "blue",
    inherit: true,
    component: "span"
  }, "highlight"), " ", "something");
}
const inherit = {
  type: "demo",
  component: Demo,
  code
};

exports.inherit = inherit;
//# sourceMappingURL=inherit.js.map
