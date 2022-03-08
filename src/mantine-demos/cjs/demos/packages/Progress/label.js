'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Progress value={75} label="75%" size="xl" radius="xl" />
<Progress
  mt="md"
  size="xl"
  radius="xl"
  sections={[
    { value: 30, color: 'pink', label: 'Documents' },
    { value: 30, color: 'grape', label: 'Apps' },
    { value: 25, color: 'violet', label: 'Other' },
  ]}
/>
`;
function Label() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Progress, {
    value: 75,
    label: "75%",
    size: "xl",
    radius: "xl"
  }), /* @__PURE__ */ React__default.createElement(core.Progress, {
    mt: "md",
    size: "xl",
    radius: "xl",
    sections: [
      { value: 30, color: "pink", label: "Documents" },
      { value: 30, color: "grape", label: "Apps" },
      { value: 25, color: "violet", label: "Other" }
    ]
  }));
}
const label = {
  type: "demo",
  code,
  component: Label
};

exports.label = label;
//# sourceMappingURL=label.js.map
