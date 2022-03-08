import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

<MultiSelect
  data={data}
  label="Large data set"
  placeholder="Scroll to see all options"
  maxDropdownHeight={160}
/>
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Large data set",
    placeholder: "Scroll to see all options",
    maxDropdownHeight: 160
  }));
}
const large = {
  type: "demo",
  code,
  component: Demo
};

export { large };
//# sourceMappingURL=large.js.map
