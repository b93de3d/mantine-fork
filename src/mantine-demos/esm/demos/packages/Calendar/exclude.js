import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar
  excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
/>
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    value,
    onChange: setValue,
    excludeDate: (date) => date.getDay() === 0 || date.getDay() === 6
  }));
}
const exclude = {
  type: "demo",
  code,
  component: Demo
};

export { exclude };
//# sourceMappingURL=exclude.js.map
