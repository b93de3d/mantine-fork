import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  clearable
  data={data}
/>

<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  searchable
  clearable
  data={data}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }), /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    searchable: true,
    style: { marginTop: 15 },
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

export { clearable };
//# sourceMappingURL=clearable.js.map
