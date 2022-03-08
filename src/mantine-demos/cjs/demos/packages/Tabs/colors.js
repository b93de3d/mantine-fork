'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tabs color="teal">
  <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
  <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
  <Tabs.Tab label="Pink tab" color="pink">
    Pink tab content
  </Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    color: "teal",
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Teal tab"
  }, "Teal tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Still teal"
  }, "Teal tab #2"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Pink tab",
    color: "pink"
  }, "Pink tab content"));
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

exports.colors = colors;
//# sourceMappingURL=colors.js.map
