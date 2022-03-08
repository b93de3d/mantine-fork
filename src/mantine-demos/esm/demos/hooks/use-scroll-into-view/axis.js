import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { useMantineTheme, Group, Paper, Text, Button } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Paper } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    axis: 'x',
  });

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
        <Paper ref={targetRef}>Scroll me into view</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    axis: "x"
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: scrollableRef,
    style: { overflowX: "scroll", height: 150, width: 300 }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { paddingLeft: 260, paddingRight: 450 }
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: targetRef,
    padding: "md",
    style: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      width: "max-content"
    }
  }, /* @__PURE__ */ React.createElement(Text, null, "Scroll me into view")))), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollIntoView()
  }, "Scroll to target"));
}
const useScrollIntoViewAxis = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollIntoViewAxis };
//# sourceMappingURL=axis.js.map
