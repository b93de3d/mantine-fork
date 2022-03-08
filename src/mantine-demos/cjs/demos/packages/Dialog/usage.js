'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened((o) => !o)
  }, "Toggle dialog")), /* @__PURE__ */ React__default.createElement(core.Dialog, {
    opened,
    withCloseButton: true,
    onClose: () => setOpened(false),
    size: "lg",
    radius: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    style: { marginBottom: 10 },
    weight: 500
  }, "Subscribe to email newsletter"), /* @__PURE__ */ React__default.createElement(core.Group, {
    align: "flex-end"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: "hello@gluesticker.com",
    style: { flex: 1 }
  }), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(false)
  }, "Subscribe"))));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
