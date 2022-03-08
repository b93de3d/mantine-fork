import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
// Error as boolean \u2013 red border color
<MultiSelect error />

// Error as React node \u2013 red border color and message below input
<MultiSelect error="Pick at least one item" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    error: true
  }), /* @__PURE__ */ React.createElement(MultiSelect, {
    style: { marginTop: 15 },
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
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
