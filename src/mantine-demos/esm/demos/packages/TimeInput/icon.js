import React from 'react';
import { ClockIcon } from '@modulz/radix-icons';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput icon={<ClockIcon />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Pick time",
    placeholder: "Pick time",
    icon: /* @__PURE__ */ React.createElement(ClockIcon, null),
    defaultValue: new Date()
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
