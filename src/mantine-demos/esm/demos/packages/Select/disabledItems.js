import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  label="Select with disabled items"
  placeholder="Select something"
  data={[
    { value: 'react', label: 'React', disabled: true },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Select with disabled items",
    placeholder: "Select something",
    data: [
      { value: "react", label: "React", disabled: true },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
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
