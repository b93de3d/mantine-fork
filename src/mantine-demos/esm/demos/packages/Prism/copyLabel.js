import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
<Prism noCopy language="tsx">{code}</Prism>

<Prism
  language="tsx"
  copyLabel="Copy code to clipboard"
  copiedLabel="Code copied to clipboard"
>
  {code}
</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    noCopy: true
  }, demoCode.trim()), /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    copyLabel: "Copy code to clipboard",
    copiedLabel: "Code copied to clipboard",
    style: { marginTop: 20 }
  }, demoCode.trim()));
}
const copyLabel = {
  type: "demo",
  component: Demo,
  code
};

export { copyLabel };
//# sourceMappingURL=copyLabel.js.map
