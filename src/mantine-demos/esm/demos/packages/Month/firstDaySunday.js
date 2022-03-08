import React from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month month={new Date()} firstDayOfWeek="sunday" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: new Date(),
    firstDayOfWeek: "sunday"
  }));
}
const firstDaySunday = {
  type: "demo",
  code,
  component: Demo
};

export { firstDaySunday };
//# sourceMappingURL=firstDaySunday.js.map
