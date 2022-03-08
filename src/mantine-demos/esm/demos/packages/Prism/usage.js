import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
import { Prism } from '@mantine/prism';

const demoCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx"
  }, demoCode.trim());
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { demoCode, usage };
//# sourceMappingURL=usage.js.map
