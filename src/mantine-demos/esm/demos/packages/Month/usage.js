import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Month } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month month={value} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(new Date());
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: value,
    value,
    onChange: setValue
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
