import React from 'react';
import { useMantineColorScheme, MantineProvider, Text, Group, Button } from '@mantine/core';

const code = `import { Button, MantineProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Georgia or serif text</Text>

      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </MantineProvider>
    </MantineProvider>
  );
}`;
function Demo() {
  const { colorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    theme: { fontFamily: "Georgia, serif", colorScheme }
  }, /* @__PURE__ */ React.createElement(Text, {
    style: { textAlign: "center", marginBottom: 10 }
  }, "Georgia or serif text"), /* @__PURE__ */ React.createElement(MantineProvider, {
    theme: { fontFamily: "Greycliff CF, sans-serif", colorScheme }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, null, "Greycliff CF button"))));
}
const nestedProviders = {
  type: "demo",
  component: Demo,
  code
};

export { nestedProviders };
//# sourceMappingURL=nested-providers.js.map
