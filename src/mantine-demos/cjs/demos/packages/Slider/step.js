'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Set min, max and step props to replace default values
<Slider
  defaultValue={5}
  min={-10}
  max={10}
  label={(value) => value.toFixed(1)}
  step={0.1}
  styles={{ markLabel: { display: 'none' } }}
/>

// Configure marks to match step
const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

<Slider
  label={(val) => MARKS.find((mark) => mark.value === val).label}
  defaultValue={50}
  step={25}
  marks={MARKS}
  styles={{ markLabel: { display: 'none' } }}
/>
`;
function Demo() {
  const MARKS = [
    { value: 0, label: "xs" },
    { value: 25, label: "sm" },
    { value: 50, label: "md" },
    { value: 75, label: "lg" },
    { value: 100, label: "xl" }
  ];
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Decimal step"), /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 0,
    min: -10,
    max: 10,
    label: (value) => value.toFixed(1),
    step: 0.1,
    styles: { markLabel: { display: "none" } }
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 15 }
  }, "Step matched with marks"), /* @__PURE__ */ React__default.createElement("div", {
    style: { paddingLeft: 4, paddingRight: 4 }
  }, /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 50,
    label: (val) => MARKS.find((mark) => mark.value === val).label,
    step: 25,
    marks: MARKS,
    styles: { markLabel: { display: "none" } }
  })));
}
const step = {
  type: "demo",
  component: Demo,
  code
};

exports.step = step;
//# sourceMappingURL=step.js.map
