'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Input size="xl" placeholder="xl input size" />
`;
function Demo() {
  const inputs = core.MANTINE_SIZES.map((size, index) => /* @__PURE__ */ React__default.createElement(core.Input, {
    style: { marginTop: index === 0 ? 0 : 15 },
    size,
    key: size,
    placeholder: `${size} input size`
  }));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, inputs);
}
const sizes = {
  type: "demo",
  code,
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
