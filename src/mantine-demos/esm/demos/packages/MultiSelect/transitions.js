import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect
  transitionDuration={150}
  transition="pop-top-left"
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    transitionDuration: 150,
    transition: "pop-top-left",
    transitionTimingFunction: "ease",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like"
  }));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
