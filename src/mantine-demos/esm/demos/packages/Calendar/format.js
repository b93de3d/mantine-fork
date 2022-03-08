import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar labelFormat="MM/YYYY" />
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    value,
    onChange: setValue,
    labelFormat: "MM/YYYY"
  }));
}
const format = {
  type: "demo",
  code,
  component: Demo
};

export { format };
//# sourceMappingURL=format.js.map
