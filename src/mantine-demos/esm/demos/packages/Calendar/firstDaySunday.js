import React from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar firstDayOfWeek="sunday" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
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
