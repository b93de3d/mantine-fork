import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<Autocomplete error />

// Error as React node \u2013 red border color and message below input
<Autocomplete error="Pick at least one item" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Autocomplete, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one that you like",
    error: true
  }), /* @__PURE__ */ React.createElement(Autocomplete, {
    style: { marginTop: 15 },
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one that you like",
    error: "Pick at least one item"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
