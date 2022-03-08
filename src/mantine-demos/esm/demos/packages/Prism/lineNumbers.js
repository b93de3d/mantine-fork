import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
<Prism withLineNumbers language="tsx">{code}</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    withLineNumbers: true
  }, demoCode.trim());
}
const lineNumbers = {
  type: "demo",
  component: Demo,
  code
};

export { lineNumbers };
//# sourceMappingURL=lineNumbers.js.map
