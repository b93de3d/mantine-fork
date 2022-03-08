'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Error as boolean \u2013 red border color
<Textarea error />

// Error as React node \u2013 red border color and message below input
<Textarea error="Comment should not include bad words" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Textarea, {
    label: "Your comment",
    placeholder: "Your comment",
    error: true
  }), /* @__PURE__ */ React__default.createElement(core.Textarea, {
    style: { marginTop: 15 },
    label: "Your comment",
    placeholder: "Your comment",
    error: "Comment should not include bad words"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=validation.js.map
