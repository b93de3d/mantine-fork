import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete
  label="Only 2 options at a time"
  placeholder="Your favorite framework"
  limit={2}
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    label: "Only 2 options at a time",
    placeholder: "Your favorite framework",
    limit: 2,
    data: ["React", "Angular", "Svelte", "Vue"]
  }));
}
const limit = {
  type: "demo",
  code,
  component: Demo
};

export { limit };
//# sourceMappingURL=limit.js.map
