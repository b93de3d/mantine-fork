import React from 'react';
import { Container } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput label="What time is it now?" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Container, {
    size: 340
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "What time is it now?"
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
