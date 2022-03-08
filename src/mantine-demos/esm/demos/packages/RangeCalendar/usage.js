import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
  return <RangeCalendar value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RangeCalendar, {
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
