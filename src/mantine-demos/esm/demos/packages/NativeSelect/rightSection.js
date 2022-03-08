import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { NativeSelect } from '@mantine/core';

const code = `
<NativeSelect rightSection={<ChevronDownIcon />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NativeSelect, {
    label: "Your favorite library/framework",
    placeholder: "Your favorite library/framework",
    data: ["React", "Angular", "Svelte", "Vue"],
    rightSection: /* @__PURE__ */ React.createElement(ChevronDownIcon, null)
  }));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=rightSection.js.map
