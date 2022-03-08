import React from 'react';
import { Group, RingProgress, Text } from '@mantine/core';

const code = `
<RingProgress
  label={<Text size="xs" align="center">Application data usage</Text>}
  sections={[
    { value: 40, color: 'cyan' },
    { value: 15, color: 'orange' },
    { value: 15, color: 'grape' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RingProgress, {
    label: /* @__PURE__ */ React.createElement(Text, {
      size: "xs",
      align: "center"
    }, "Application data usage"),
    sections: [
      { value: 40, color: "cyan" },
      { value: 15, color: "orange" },
      { value: 15, color: "grape" }
    ]
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
