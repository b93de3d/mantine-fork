'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _colWrapper = require('./_col-wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Grid>
  <Grid.Col md={6} lg={3}>1</Grid.Col>
  <Grid.Col md={6} lg={3}>2</Grid.Col>
  <Grid.Col md={6} lg={3}>3</Grid.Col>
  <Grid.Col md={6} lg={3}>4</Grid.Col>
</Grid>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, null, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    md: 6,
    lg: 3
  }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    md: 6,
    lg: 3
  }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    md: 6,
    lg: 3
  }, "3"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, {
    md: 6,
    lg: 3
  }, "4"));
}
const responsive = {
  type: "demo",
  code,
  component: Demo
};

exports.responsive = responsive;
//# sourceMappingURL=responsive.js.map
