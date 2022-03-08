'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Text lineClamp={3}>
  <TypographyStylesProvider>
    <h3>Line clamp with TypographyStylesProvider</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
      corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
      non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
      veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
      perspiciatis.
    </p>
  </TypographyStylesProvider>
</Text>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Text, {
    lineClamp: 3
  }, /* @__PURE__ */ React__default.createElement(core.TypographyStylesProvider, null, /* @__PURE__ */ React__default.createElement("h3", {
    style: { marginTop: 0 }
  }, "Line clamp with TypographyStylesProvider"), /* @__PURE__ */ React__default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")));
}
const lineClamp = {
  type: "demo",
  code,
  component: Demo
};

exports.lineClamp = lineClamp;
//# sourceMappingURL=lineClamp.js.map
