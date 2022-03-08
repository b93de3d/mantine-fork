import React from 'react';
import { Code } from '@mantine/core';

const code = `
<Code>React.createElement()</Code>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Code, null, "React.createElement()");
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

export { inline };
//# sourceMappingURL=inline.js.map
