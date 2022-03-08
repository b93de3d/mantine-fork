'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<MultiSelect maxSelectedValues={3} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    data: _data.data,
    label: "Pick 3 values or less",
    placeholder: "Pick 3 values or less",
    searchable: true,
    maxSelectedValues: 3
  }));
}
const maxSelectedValues = {
  type: "demo",
  code,
  component: Demo
};

exports.maxSelectedValues = maxSelectedValues;
//# sourceMappingURL=maxSelectedValues.js.map
