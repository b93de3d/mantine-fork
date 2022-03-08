import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput format="12" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Pick time",
    format: "12",
    defaultValue: new Date()
  }));
}
const format = {
  type: "demo",
  code,
  component: Demo
};

export { format };
//# sourceMappingURL=format.js.map
