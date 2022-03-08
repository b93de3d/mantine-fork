'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Text
  component="span"
  align="center"
  variant="gradient"
  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
  size="xl"
  weight={700}
  style={{ fontFamily: 'Greycliff CF, sans-serif' }}
>
  Indigo cyan gradient
</Text>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    component: "span",
    align: "center",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan", deg: 45 },
    size: "xl",
    weight: 700,
    style: { fontFamily: "Greycliff CF, sans-serif" }
  }, "Indigo cyan gradient"));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

exports.gradient = gradient;
//# sourceMappingURL=gradient.js.map
