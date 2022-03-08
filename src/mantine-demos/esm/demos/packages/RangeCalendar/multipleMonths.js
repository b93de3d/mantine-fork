import React, { useState } from 'react';
import { MediaQuery, Group, Text } from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';

const code = `
<RangeCalendar amountOfMonths={2} />
`;
function Demo() {
  const [value, setValue] = useState([new Date(2021, 11, 1), new Date(2022, 0, 15)]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MediaQuery, {
    smallerThan: "md",
    styles: { display: "none" }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RangeCalendar, {
    amountOfMonths: 2,
    value,
    onChange: setValue,
    initialMonth: new Date(2021, 11, 1)
  }))), /* @__PURE__ */ React.createElement(MediaQuery, {
    largerThan: "md",
    styles: { display: "none" }
  }, /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Demo is not available, increase viewport size to see it")));
}
const multipleMonths = {
  type: "demo",
  code,
  component: Demo
};

export { multipleMonths };
//# sourceMappingURL=multipleMonths.js.map
