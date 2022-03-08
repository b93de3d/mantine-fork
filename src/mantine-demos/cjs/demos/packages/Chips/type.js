'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Single chip can be selected at a time (radio input)
<Chips>{/* <Chip /> components */}</Chips>

// Multiple chips can be selected at a time (checkbox input)
<Chips multiple>{/* <Chip /> components */}</Chips>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Chips, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "1"
  }, "Single chip"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "2"
  }, "Can be selected"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "3"
  }, "At a time")), /* @__PURE__ */ React__default.createElement(core.Chips, {
    position: "center",
    multiple: true,
    mt: 15
  }, /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "1"
  }, "Multiple chips"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "2"
  }, "Can be selected"), /* @__PURE__ */ React__default.createElement(core.Chip, {
    value: "3"
  }, "At a time")));
}
const type = {
  type: "demo",
  component: Demo,
  code
};

exports.type = type;
//# sourceMappingURL=type.js.map
