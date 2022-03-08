import React from 'react';
import { Medal } from 'tabler-icons-react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput icon={<Medal />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "Age when you graduated",
    placeholder: "Age when you graduated",
    defaultValue: 22,
    min: 0,
    max: 120,
    icon: /* @__PURE__ */ React.createElement(Medal, {
      size: 18
    })
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
