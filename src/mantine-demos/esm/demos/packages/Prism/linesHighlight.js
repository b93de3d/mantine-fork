import React from 'react';
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;
const code = `
const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

<Prism
  language="tsx"
  withLineNumbers
  highlightLines={{
    3: deleted,
    4: deleted,
    5: deleted,
    7: added,
    8: added,
    9: added,
  }}
>
  {code}
</Prism>
`;
function Demo() {
  const deleted = { color: "red", label: "-" };
  const added = { color: "green", label: "+" };
  return /* @__PURE__ */ React.createElement(Prism, {
    language: "tsx",
    withLineNumbers: true,
    highlightLines: {
      3: deleted,
      4: deleted,
      5: deleted,
      7: added,
      8: added,
      9: added
    }
  }, demoCode.trim());
}
const linesHighlight = {
  type: "demo",
  component: Demo,
  code
};

export { linesHighlight };
//# sourceMappingURL=linesHighlight.js.map
