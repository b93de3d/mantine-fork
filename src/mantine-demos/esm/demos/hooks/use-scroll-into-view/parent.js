import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { useMantineTheme, Group, Paper, Text, Button } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Paper } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <Paper ref={targetRef}>Scroll me into view<</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: scrollableRef,
    style: { overflowY: "scroll", height: 300, flex: 1 }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { paddingTop: 260, paddingBottom: 450 }
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: targetRef,
    padding: "xl",
    style: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      width: "100%"
    }
  }, /* @__PURE__ */ React.createElement(Text, null, "Scroll me into view")))), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollIntoView()
  }, "Scroll to target"));
}
const useScrollIntoViewParent = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollIntoViewParent };
//# sourceMappingURL=parent.js.map
