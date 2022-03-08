import React from 'react';
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;
function Demo() {
  const { x, y } = useMouse();
  return /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Mouse coordinates ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${x}, y: ${y} }`));
}
const useMouseUsage = {
  type: "demo",
  code,
  component: Demo
};

export { useMouseUsage };
//# sourceMappingURL=usage.js.map
