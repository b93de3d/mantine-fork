import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { Group, Text, Button } from '@mantine/core';

const code = `
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Text, null, "Scroll position x: ", scroll.x, ", y: ", scroll.y), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollTo({ y: 0 })
  }, "Scroll to top"));
}
const useWindowScrollHook = {
  type: "demo",
  code,
  component: Demo
};

export { useWindowScrollHook };
//# sourceMappingURL=use-window-scroll.js.map
