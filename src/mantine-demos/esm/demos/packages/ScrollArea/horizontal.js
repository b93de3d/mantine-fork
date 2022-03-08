import React from 'react';
import { Group, ScrollArea } from '@mantine/core';
import { Content } from './_content.js';

const code = `
<ScrollArea style={{ width: 300, height: 200 }}>
  <div style={{ width: 600 }}>
    {/* ... content */}
  </div>
</ScrollArea>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ScrollArea, {
    style: { width: 300, height: 200 }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: 600 }
  }, /* @__PURE__ */ React.createElement(Content, null))));
}
const horizontal = {
  type: "demo",
  component: Demo,
  code
};

export { horizontal };
//# sourceMappingURL=horizontal.js.map
