import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  data={data}
  label="Select with native scrollbars"
  placeholder="Dropdown with native scrollbars"
  dropdownComponent="div"
/>
`;
const data = Array(50).fill(0).map((_, index) => ({
  value: `${index}`,
  label: `Item ${index}`
}));
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    data,
    label: "Select with native scrollbars",
    placeholder: "Dropdown with native scrollbars",
    dropdownComponent: "div"
  }));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

export { scrollbars };
//# sourceMappingURL=scrollbars.js.map
