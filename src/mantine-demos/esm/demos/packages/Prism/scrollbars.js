import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const longCode = \`
<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>
\`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>

      <Text mb={5} mt="xl">With native scrollbars:</Text>
      <Prism language="tsx" scrollAreaComponent="div">{longCode}</Prism>
    </>
  );
}
`;
const longCode = `<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    mb: 5
  }, "With ScrollArea component (default):"), /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx"
  }, longCode), /* @__PURE__ */ React.createElement(Text, {
    mb: 5,
    mt: "xl"
  }, "With native scrollbars:"), /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    scrollAreaComponent: "div"
  }, longCode));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

export { scrollbars };
//# sourceMappingURL=scrollbars.js.map
