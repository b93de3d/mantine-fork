import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState([now, then]);

  return <TimeRangeInput label="Appointment time" value={value} onChange={setValue} clearable />;
}
`;
function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, "minutes").toDate();
  const [value, setValue] = useState([now, then]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeRangeInput, {
    label: "Appointment time",
    value,
    onChange: setValue,
    clearable: true
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
