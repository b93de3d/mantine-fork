'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "sm"
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "sm",
    variant: "dashed"
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "sm",
    variant: "dotted"
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
