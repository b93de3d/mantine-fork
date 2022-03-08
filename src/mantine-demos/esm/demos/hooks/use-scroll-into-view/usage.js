import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { useMantineTheme, Group, Button, Text } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text } from '@mantine/core';

function Demo() {
  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: navbarHeight });

  return (
    <>
      <Button onClick={() => scrollIntoView({ alignment: 'center' })}>
        Scroll to target
      </Button>

      <div style={{ height: '50vh'}} />

      <Text ref={targetRef}>Hello there</Text>
    </>
  );
}

`;
function Demo() {
  const theme = useMantineTheme();
  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: navbarHeight
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollIntoView({
      alignment: "center"
    })
  }, "Scroll to target"), /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      height: "50vh",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }
  }), /* @__PURE__ */ React.createElement(Text, {
    ref: targetRef
  }, "Hello there"));
}
const useScrollIntoViewUsage = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollIntoViewUsage };
//# sourceMappingURL=usage.js.map
