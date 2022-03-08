import React from 'react';
import { useMantineColorScheme, MantineProvider, Title, Group, Button, Code } from '@mantine/core';

const code = `
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
    }}>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;
function Demo() {
  const { colorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    theme: {
      colorScheme,
      fontFamily: "Verdana, sans-serif",
      fontFamilyMonospace: "Monaco, Courier, monospace",
      headings: { fontFamily: "Greycliff CF, sans-serif" }
    }
  }, /* @__PURE__ */ React.createElement(Title, {
    style: { textAlign: "center", marginBottom: 10 },
    order: 3
  }, "Greycliff CF or sans-serif title"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, null, "Verdana button"), /* @__PURE__ */ React.createElement(Code, null, "Monaco, Courier Code")));
}
const themeFontsExtend = {
  type: "demo",
  component: Demo,
  code
};

export { themeFontsExtend };
//# sourceMappingURL=theme-fonts-extend.js.map
