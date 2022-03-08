import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
<MultiSelect
  label="MultiSelect with disabled items"
  placeholder="Select items"
  data={[
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue', disabled: true },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    label: "MultiSelect with disabled items",
    placeholder: "Select items",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue", disabled: true }
    ]
  }));
}
const disabledItems = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, disabledItems };
//# sourceMappingURL=disabledItems.js.map
