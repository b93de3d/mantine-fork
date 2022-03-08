'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Progress
  size="xl"
  sections={[
    { value: 40, color: 'cyan' },
    { value: 20, color: 'blue' },
    { value: 15, color: 'indigo' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Progress, {
    size: "xl",
    sections: [
      { value: 40, color: "cyan" },
      { value: 20, color: "blue" },
      { value: 15, color: "indigo" }
    ]
  });
}
const sections = {
  type: "demo",
  code,
  component: Demo
};

exports.sections = sections;
//# sourceMappingURL=sections.js.map
