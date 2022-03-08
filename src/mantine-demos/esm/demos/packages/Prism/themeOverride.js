import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
<Prism colorScheme="dark" language="tsx">{code}</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    colorScheme: "dark"
  }, demoCode.trim());
}
const themeOverride = {
  type: "demo",
  component: Demo,
  code
};

export { themeOverride };
//# sourceMappingURL=themeOverride.js.map
