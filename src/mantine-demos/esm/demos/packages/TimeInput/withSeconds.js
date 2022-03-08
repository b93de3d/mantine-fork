import React from 'react';
import { Container } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput label="What time is it now?" withSeconds />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Container, {
    size: 340
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "What time is it now?",
    withSeconds: true,
    defaultValue: new Date()
  }));
}
const withSeconds = {
  type: "demo",
  code,
  component: Demo
};

export { withSeconds };
//# sourceMappingURL=withSeconds.js.map
