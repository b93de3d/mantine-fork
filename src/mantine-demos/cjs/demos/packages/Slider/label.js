'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Disable label
<Slider label={null} />

// Format label with function
<Slider label={(value) => \`\${value} \xB0C\`} />

// Always display label
<Slider labelAlwaysOn />

// Change label transition
<Slider
  labelTransition="skew-down"
  labelTransitionDuration={150}
  labelTransitionTimingFunction="ease"
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "No label"), /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    label: null
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 20 }
  }, "Formatted label"), /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    label: (value) => `${value} \xB0C`
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 20 }
  }, "Label always visible"), /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    labelAlwaysOn: true
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 20 }
  }, "Custom label transition"), /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    labelTransition: "skew-down",
    labelTransitionDuration: 150,
    labelTransitionTimingFunction: "ease"
  }));
}
const label = {
  type: "demo",
  component: Demo,
  code
};

exports.label = label;
//# sourceMappingURL=label.js.map
