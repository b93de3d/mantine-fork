import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month hideWeekdays />
`;
function Demo() {
  const [value, setValue] = useState(new Date());
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: value,
    value,
    onChange: setValue,
    hideWeekdays: true
  }));
}
const weekdays = {
  type: "demo",
  code,
  component: Demo
};

export { weekdays };
//# sourceMappingURL=weekdays.js.map
