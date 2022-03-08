import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
<MultiSelect
  label="Your favorite Rick and Morty character"
  placeholder="Pick all that you like"
  data={[
    { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
    { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
    { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
    { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    label: "Your favorite Rick and Morty character",
    placeholder: "Pick all that you like",
    data: [
      { value: "rick", label: "Rick", group: "Used to be a pickle" },
      { value: "morty", label: "Morty", group: "Never was a pickle" },
      { value: "beth", label: "Beth", group: "Never was a pickle" },
      { value: "summer", label: "Summer", group: "Never was a pickle" }
    ]
  }));
}
const groups = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, groups };
//# sourceMappingURL=groups.js.map
