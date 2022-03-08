'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Progress
  sections={[
    { value: 40, color: '#68b5e8' },
    { value: 15, color: '#6888e8' },
    { value: 15, color: '#8468e8' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Progress, {
    sections: [
      { value: 40, color: "#68b5e8" },
      { value: 15, color: "#6888e8" },
      { value: 15, color: "#8468e8" }
    ]
  });
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

exports.colors = colors;
//# sourceMappingURL=colors.js.map
