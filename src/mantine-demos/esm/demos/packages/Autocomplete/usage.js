import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete
  label="Your favorite framework/library"
  placeholder="Pick one"
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    data: ["React", "Angular", "Svelte", "Vue"]
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
