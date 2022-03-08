import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect rightSection={<ChevronDownIcon />} styles={{ rightSection: { pointerEvents: 'none' } }} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    rightSection: /* @__PURE__ */ React.createElement(ChevronDownIcon, null),
    styles: { rightSection: { pointerEvents: "none" } }
  }));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=rightSection.js.map
