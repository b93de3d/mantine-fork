'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Text size="xs">Extra small text</Text>
<Text size="sm">Small text</Text>
<Text size="md">Default text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>
<Text weight={500}>Semibold</Text>
<Text weight={700}>Bold</Text>
<Text underline>Underlined</Text>
<Text variant="link" component="a" href="https://mantine.dev">Link variant</Text>
<Text color="red">Red text</Text>
<Text color="blue">Blue text</Text>
<Text color="gray">Gray text</Text>
<Text transform="uppercase">Uppercase</Text>
<Text transform="capitalize">capitalized text</Text>
<Text align="center">Aligned to center</Text>
<Text align="right">Aligned to right</Text>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs"
  }, "Extra small text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm"
  }, "Small text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "md"
  }, "Default text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "lg"
  }, "Large text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xl"
  }, "Extra large text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    weight: 500
  }, "Semibold"), /* @__PURE__ */ React__default.createElement(core.Text, {
    weight: 700
  }, "Bold"), /* @__PURE__ */ React__default.createElement(core.Text, {
    underline: true
  }, "Underlined"), /* @__PURE__ */ React__default.createElement(core.Text, {
    variant: "link",
    component: "a",
    href: "https://mantine.dev"
  }, "Link variant"), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "red"
  }, "Red text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "blue"
  }, "Blue text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "gray"
  }, "Gray text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    transform: "uppercase"
  }, "Uppercase"), /* @__PURE__ */ React__default.createElement(core.Text, {
    transform: "capitalize"
  }, "capitalized text"), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Aligned to center"), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "right"
  }, "Aligned to right"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
