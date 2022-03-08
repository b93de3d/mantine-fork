import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
<MultiSelect
  data={data}
  label="MultiSelect with native scrollbars"
  placeholder="Dropdown rendered as div element"
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
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "MultiSelect with native scrollbars",
    placeholder: "Dropdown rendered as div element",
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
