import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Disabled without value",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: []
  }), /* @__PURE__ */ React.createElement(MultiSelect, {
    style: { marginTop: 15 },
    data,
    label: "Disabled with values",
    placeholder: "Won't pick anything",
    disabled: true,
    defaultValue: ["react", "vue"]
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
