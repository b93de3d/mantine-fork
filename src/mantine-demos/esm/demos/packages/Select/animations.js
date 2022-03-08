import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  transition="pop-top-left"
  transitionDuration={80}
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"],
    transition: "pop-top-left",
    transitionDuration: 80,
    transitionTimingFunction: "ease"
  }));
}
const animations = {
  type: "demo",
  code,
  component: Demo
};

export { animations };
//# sourceMappingURL=animations.js.map
