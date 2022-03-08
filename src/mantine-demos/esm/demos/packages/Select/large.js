import React from 'react';
import { Select } from '@mantine/core';

const code = `
const data = Array(50)
.fill(0)
.map((_, index) => ({
  value: \`\${index}\`,
  label: \`Item \${index}\`,
}));

<Select
  label="What item is the best?"
  placeholder="Pick one"
  searchable
  nothingFound="No options"
  maxDropdownHeight={280}
  data={data}
/>
`;
function Demo() {
  const data = Array(50).fill(0).map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`
  }));
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "What item is the best?",
    placeholder: "Pick one",
    searchable: true,
    nothingFound: "No options",
    maxDropdownHeight: 280,
    data
  }));
}
const large = {
  type: "demo",
  code,
  component: Demo
};

export { large };
//# sourceMappingURL=large.js.map
