import React from 'react';
import { JsonInput } from '@mantine/core';

const code = `
<JsonInput
  label="Your package.json"
  placeholder="Textarea will autosize to fit the content"
  validationError="Invalid json"
  formatOnBlur
  autosize
  minRows={4}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(JsonInput, {
    label: "Your package.json",
    placeholder: "Textarea will autosize to fit the content",
    validationError: "Invalid json",
    formatOnBlur: true,
    autosize: true,
    minRows: 4
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
