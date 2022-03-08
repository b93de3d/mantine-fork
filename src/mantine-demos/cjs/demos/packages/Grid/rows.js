'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _colWrapper = require('./_col-wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Grid>
  <Grid.Col span={4}>1</Grid.Col>
  <Grid.Col span={4}>2</Grid.Col>
  <Grid.Col span={4}>3</Grid.Col>
  <Grid.Col span={4}>4</Grid.Col>
</Grid>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, null, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    span: 4
  }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    span: 4
  }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    span: 4
  }, "3"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    span: 4
  }, "4"));
}
const rows = {
  type: "demo",
  code,
  component: Demo
};

exports.rows = rows;
//# sourceMappingURL=rows.js.map
