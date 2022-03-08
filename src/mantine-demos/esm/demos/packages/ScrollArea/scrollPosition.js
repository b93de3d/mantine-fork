import React, { useState } from 'react';
import { Group, ScrollArea, Text, Code } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const [scrollPosition2, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(ScrollArea, {
    style: { width: 300, height: 200 },
    onScrollPositionChange
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: 600 }
  }, /* @__PURE__ */ React.createElement(Content, null))), /* @__PURE__ */ React.createElement(Text, null, "Scroll position: ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${scrollPosition2.x}, y: ${scrollPosition2.y} }`)));
}
const scrollPosition = {
  type: "demo",
  component: Demo,
  code
};

export { scrollPosition };
//# sourceMappingURL=scrollPosition.js.map
