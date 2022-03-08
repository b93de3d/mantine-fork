import React from 'react';
import { useMantineTheme, Group, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code, Group } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const { ref, x, y } = useMouse();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: {
      width: 300,
      height: 180,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }
  })), /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    style: { marginTop: theme.spacing.sm }
  }, "Mouse coordinates ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${x}, y: ${y} }`)));
}
const useMouseRef = {
  type: "demo",
  code,
  component: Demo
};

export { useMouseRef };
//# sourceMappingURL=ref.js.map
