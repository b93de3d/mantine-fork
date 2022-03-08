import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select allowDeselect {...otherProps} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    allowDeselect: true,
    defaultValue: "react",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const deselect = {
  type: "demo",
  code,
  component: Demo
};

export { deselect };
//# sourceMappingURL=deselect.js.map
