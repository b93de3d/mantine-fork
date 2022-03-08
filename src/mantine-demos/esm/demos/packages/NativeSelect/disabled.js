import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
<NativeSelect disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NativeSelect, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled select",
    placeholder: "Pick one that you like",
    disabled: true
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
