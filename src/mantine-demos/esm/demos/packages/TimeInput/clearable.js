import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput clearable defaultValue={new Date()} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "With a clear button",
    clearable: true,
    defaultValue: new Date()
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

export { clearable };
//# sourceMappingURL=clearable.js.map
