import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
<Tabs>
  <Tabs.Tab label="First">First tab content</Tabs.Tab>
  <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
  <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, {
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "First"
  }, "First tab content"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Second"
  }, "Second tab content"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    label: "Third"
  }, "Third tab content"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
