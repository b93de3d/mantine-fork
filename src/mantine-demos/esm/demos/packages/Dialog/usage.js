import React, { useState } from 'react';
import { Group, Button, Dialog, Text, TextInput } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened((o) => !o)
  }, "Toggle dialog")), /* @__PURE__ */ React.createElement(Dialog, {
    opened,
    withCloseButton: true,
    onClose: () => setOpened(false),
    size: "lg",
    radius: "md"
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    style: { marginBottom: 10 },
    weight: 500
  }, "Subscribe to email newsletter"), /* @__PURE__ */ React.createElement(Group, {
    align: "flex-end"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    placeholder: "hello@gluesticker.com",
    style: { flex: 1 }
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(false)
  }, "Subscribe"))));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=usage.js.map
