import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Disabled without value",
    disabled: true
  }), /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Disabled with value",
    disabled: true,
    defaultValue: new Date(),
    mt: "md"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
