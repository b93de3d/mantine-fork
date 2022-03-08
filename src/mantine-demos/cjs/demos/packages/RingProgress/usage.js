'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<RingProgress
  label={<Text size="xs" align="center">Application data usage</Text>}
  sections={[
    { value: 40, color: 'cyan' },
    { value: 15, color: 'orange' },
    { value: 15, color: 'grape' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.RingProgress, {
    label: /* @__PURE__ */ React__default.createElement(core.Text, {
      size: "xs",
      align: "center"
    }, "Application data usage"),
    sections: [
      { value: 40, color: "cyan" },
      { value: 15, color: "orange" },
      { value: 15, color: "grape" }
    ]
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
