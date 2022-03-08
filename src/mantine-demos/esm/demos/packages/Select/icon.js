import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Select } from '@mantine/core';

const code = `
<Select icon={<HashIcon />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Pick a hashtag",
    placeholder: "Pick a hashtag",
    data: ["React", "Angular", "Svelte", "Vue"],
    icon: /* @__PURE__ */ React.createElement(Hash, {
      size: 14
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
