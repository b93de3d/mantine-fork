import React from 'react';
import { Text } from '@mantine/core';

const code = `
<Text color="dimmed">Dimmed text</Text>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Text, {
    color: "dimmed"
  }, "Dimmed text");
}
const dimmed = {
  type: "demo",
  code,
  component: Demo
};

export { dimmed };
//# sourceMappingURL=dimmed.js.map
