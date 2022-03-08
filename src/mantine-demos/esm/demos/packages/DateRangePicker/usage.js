import React, { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
  return (
    <DateRangePicker
      label="Book hotel"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DateRangePicker, {
    label: "Book hotel",
    placeholder: "Pick dates range",
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
