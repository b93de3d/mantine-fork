import React from 'react';
import { Text } from '@mantine/core';
import { SegmentedControlWrapper } from './Wrapper.js';

const code = `
// No transitions
<SegmentedControl transitionDuration={0} />

// 500ms linear transition
<SegmentedControl
  transitionDuration={500}
  transitionTimingFunction="linear"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    weight: 500,
    style: { marginBottom: 3 }
  }, "No transitions"), /* @__PURE__ */ React.createElement(SegmentedControlWrapper, {
    transitionDuration: 0
  })), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: 15 }
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    weight: 500,
    style: { marginBottom: 3 }
  }, "500ms linear transition"), /* @__PURE__ */ React.createElement(SegmentedControlWrapper, {
    transitionDuration: 500,
    transitionTimingFunction: "linear"
  })));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
