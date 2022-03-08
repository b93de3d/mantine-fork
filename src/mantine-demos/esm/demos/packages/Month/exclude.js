import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
<Month excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6} />
`;
function Demo() {
  const [value, setValue] = useState(new Date());
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: value,
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
