import React from 'react';
import { Textarea } from '@mantine/core';

const code = `
<Textarea
  placeholder="Autosize with no rows limit"
  label="Autosize with no rows limit"
  autosize
  minRows={2}
/>

<Textarea
  label="Autosize with 4 rows max"
  placeholder="Autosize with 4 rows max"
  autosize
  minRows={2}
  maxRows={4}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(Textarea, {
    placeholder: "Autosize with no rows limit",
    label: "Autosize with no rows limit",
    autosize: true,
    minRows: 2
  }), /* @__PURE__ */ React.createElement(Textarea, {
    label: "Autosize with 4 rows max",
    placeholder: "Autosize with 4 rows max",
    autosize: true,
    minRows: 2,
    maxRows: 4,
    style: { marginTop: 15 }
  }));
}
const autosize = {
  type: "demo",
  code,
  component: Demo
};

export { autosize };
//# sourceMappingURL=autosize.js.map
