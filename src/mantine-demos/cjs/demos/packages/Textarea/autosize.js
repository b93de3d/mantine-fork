'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Textarea
  placeholder="Autosize with no rows limit"
  label="Autosize with no rows limit"
  autosize
  minRows={2}
/>

<Textarea
  label="Autosize with 4 rows max"
  placeholder="Autosize with 4 rows max"
  autosize
  minRows={2}
  maxRows={4}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Textarea, {
    placeholder: "Autosize with no rows limit",
    label: "Autosize with no rows limit",
    autosize: true,
    minRows: 2
  }), /* @__PURE__ */ React__default.createElement(core.Textarea, {
    label: "Autosize with 4 rows max",
    placeholder: "Autosize with 4 rows max",
    autosize: true,
    minRows: 2,
    maxRows: 4,
    style: { marginTop: 15 }
  }));
}
const autosize = {
  type: "demo",
  code,
  component: Demo
};

exports.autosize = autosize;
//# sourceMappingURL=autosize.js.map
