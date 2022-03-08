import React from 'react';
import { Code } from '@mantine/core';

const code = `
const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

<Code block>{codeForPreviousDemo}</Code>
`;
const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Code, {
    block: true
  }, codeForPreviousDemo);
}
const block = {
  type: "demo",
  code,
  component: Demo
};

export { block };
//# sourceMappingURL=block.js.map
