import React, { useRef } from 'react';
import { Group, ScrollArea, Button } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useRef } from 'react';
import { ScrollArea, Button, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>();

  const scrollToBottom = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Group position="center" direction="column">
      <ScrollArea style={{ width: 300, height: 200 }} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group>
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Group>
  );
}
`;
function Demo() {
  const viewport = useRef();
  const scrollToBottom = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: "smooth" });
  const scrollToCenter = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: "smooth" });
  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: "smooth" });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(ScrollArea, {
    style: { width: 300, height: 200 },
    viewportRef: viewport
  }, /* @__PURE__ */ React.createElement(Content, null)), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: scrollToBottom,
    variant: "outline"
  }, "Scroll to bottom"), /* @__PURE__ */ React.createElement(Button, {
    onClick: scrollToCenter,
    variant: "outline"
  }, "Scroll to center"), /* @__PURE__ */ React.createElement(Button, {
    onClick: scrollToTop,
    variant: "outline"
  }, "Scroll to top")));
}
const scrollTo = {
  type: "demo",
  component: Demo,
  code
};

export { scrollTo };
//# sourceMappingURL=scrollTo.js.map
