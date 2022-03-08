import React from 'react';
import { useMantineTheme, Text, Group, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <Text align="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    size: "sm",
    style: { marginBottom: theme.spacing.xs }
  }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement("textarea", {
    ref,
    style: {
      width: 400,
      height: 120,
      border: "none",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      position: "relative"
    }
  })), /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    style: { marginTop: theme.spacing.sm }
  }, "Rect: ", /* @__PURE__ */ React.createElement(Code, null, JSON.stringify(rect, null, 2))));
}
const useResizeObserverDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useResizeObserverDemo };
//# sourceMappingURL=use-resize-observer.js.map
