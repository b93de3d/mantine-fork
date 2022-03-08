import React from 'react';
import { Progress } from '@mantine/core';

const code = `
<Progress
  size="xl"
  sections={[
    { value: 40, color: 'cyan' },
    { value: 20, color: 'blue' },
    { value: 15, color: 'indigo' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Progress, {
    size: "xl",
    sections: [
      { value: 40, color: "cyan" },
      { value: 20, color: "blue" },
      { value: 15, color: "indigo" }
    ]
  });
}
const sections = {
  type: "demo",
  code,
  component: Demo
};

export { sections };
//# sourceMappingURL=sections.js.map
