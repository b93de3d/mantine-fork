import React from 'react';
import { Text } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    size: "xs"
  }, "Extra small text"), /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, "Small text"), /* @__PURE__ */ React.createElement(Text, {
    size: "md"
  }, "Default text"), /* @__PURE__ */ React.createElement(Text, {
    size: "lg"
  }, "Large text"), /* @__PURE__ */ React.createElement(Text, {
    size: "xl"
  }, "Extra large text"), /* @__PURE__ */ React.createElement(Text, {
    weight: 500
  }, "Semibold"), /* @__PURE__ */ React.createElement(Text, {
    weight: 700
  }, "Bold"), /* @__PURE__ */ React.createElement(Text, {
    underline: true
  }, "Underlined"), /* @__PURE__ */ React.createElement(Text, {
    variant: "link",
    component: "a",
    href: "https://mantine.dev"
  }, "Link variant"), /* @__PURE__ */ React.createElement(Text, {
    color: "red"
  }, "Red text"), /* @__PURE__ */ React.createElement(Text, {
    color: "blue"
  }, "Blue text"), /* @__PURE__ */ React.createElement(Text, {
    color: "gray"
  }, "Gray text"), /* @__PURE__ */ React.createElement(Text, {
    transform: "uppercase"
  }, "Uppercase"), /* @__PURE__ */ React.createElement(Text, {
    transform: "capitalize"
  }, "capitalized text"), /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Aligned to center"), /* @__PURE__ */ React.createElement(Text, {
    align: "right"
  }, "Aligned to right"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
