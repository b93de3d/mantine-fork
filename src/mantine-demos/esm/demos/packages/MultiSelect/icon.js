import React from 'react';
import { Hash } from 'tabler-icons-react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect icon={<Hash />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Pick hashtags",
    placeholder: "Pick all that you like",
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
