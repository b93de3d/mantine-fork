import React from 'react';
import { ChatBubbleIcon, MixerHorizontalIcon } from '@modulz/radix-icons';
import { Tabs } from '@mantine/core';

const code = `
<Tabs>
  <Tabs.Tab label="Chat" icon={<ChatBubbleIcon />}>Chat here</Tabs.Tab>
  <Tabs.Tab label="Settings" icon={<MixerHorizontalIcon />}>Settings</Tabs.Tab>
  <Tabs.Tab icon="$">Get money!</Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, {
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Chat",
    icon: /* @__PURE__ */ React.createElement(ChatBubbleIcon, null)
  }, "Chat here"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Settings",
    icon: /* @__PURE__ */ React.createElement(MixerHorizontalIcon, null)
  }, "Settings"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    icon: "$"
  }, "Get money!"));
}
const icons = {
  type: "demo",
  code,
  component: Demo
};

export { icons };
//# sourceMappingURL=icons.js.map
