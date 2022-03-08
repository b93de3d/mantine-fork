import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Select } from '@mantine/core';

const code = `
<Select
  rightSection={<ChevronDownIcon />}
  styles={{ rightSection: { pointerEvents: 'none' } }}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    rightSection: /* @__PURE__ */ React.createElement(ChevronDownIcon, null),
    styles: { rightSection: { pointerEvents: "none" } },
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=rightSection.js.map
