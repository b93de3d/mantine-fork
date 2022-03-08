'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tabs>
  <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
    First tab content
  </Tabs.Tab>
  <Tabs.Tab label="Not allowed" disabled>
    https://youtu.be/dQw4w9WgXcQ
  </Tabs.Tab>
  <Tabs.Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
    Yes, delete this
  </Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "First",
    title: "Reveal hidden truth on long mouse over"
  }, "First tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Not allowed",
    disabled: true
  }, "https://youtu.be/dQw4w9WgXcQ"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Delete this?",
    color: "red",
    style: { fontWeight: 500 }
  }, "Yes, delete this"));
}
const tabProps = {
  type: "demo",
  code,
  component: Demo
};

exports.tabProps = tabProps;
//# sourceMappingURL=tabProps.js.map
