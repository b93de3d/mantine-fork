import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
<Tabs color="teal">
  <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
  <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
  <Tabs.Tab label="Pink tab" color="pink">
    Pink tab content
  </Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, {
    color: "teal",
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Teal tab"
  }, "Teal tab content"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Still teal"
  }, "Teal tab #2"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Pink tab",
    color: "pink"
  }, "Pink tab content"));
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

export { colors };
//# sourceMappingURL=colors.js.map
