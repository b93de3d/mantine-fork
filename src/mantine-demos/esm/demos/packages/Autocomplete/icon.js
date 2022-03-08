import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete icon={<Hash />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    label: "Enter a hashtag",
    placeholder: "Enter a hashtag",
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
