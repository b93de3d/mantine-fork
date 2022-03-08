'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Input variant="default" placeholder="Default variant" />
<Input variant="filled" placeholder="Filled variant" />
<Input variant="unstyled" placeholder="Unstyled variant" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Input, {
    variant: "default",
    placeholder: "Default variant"
  }), /* @__PURE__ */ React__default.createElement(core.Input, {
    style: { marginTop: 15 },
    variant: "filled",
    placeholder: "Filled variant"
  }), /* @__PURE__ */ React__default.createElement(core.Input, {
    style: { marginTop: 15 },
    variant: "unstyled",
    placeholder: "Unstyled variant"
  }));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

exports.variants = variants;
//# sourceMappingURL=variants.js.map
