'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tabs>
  <Tabs.Tab label="First">First tab content</Tabs.Tab>
  <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
  <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "First"
  }, "First tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Second"
  }, "Second tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Third"
  }, "Third tab content"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
