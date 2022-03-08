import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  searchable
  nothingFound="No options"
  data={[
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    searchable: true,
    nothingFound: "No options",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const searchable = {
  type: "demo",
  code,
  component: Demo
};

export { searchable };
//# sourceMappingURL=searchable.js.map
