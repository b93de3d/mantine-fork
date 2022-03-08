import React from 'react';
import { Group, RingProgress } from '@mantine/core';

const code = `
<RingProgress
  sections={[
    { value: 40, color: '#68b5e8' },
    { value: 15, color: '#6888e8' },
    { value: 15, color: '#8468e8' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RingProgress, {
    sections: [
      { value: 40, color: "#68b5e8" },
      { value: 15, color: "#6888e8" },
      { value: 15, color: "#8468e8" }
    ]
  }));
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

export { colors };
//# sourceMappingURL=colors.js.map
