import React, { useState } from 'react';
import { MediaQuery, Group, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar amountOfMonths={2} />
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MediaQuery, {
    smallerThan: "md",
    styles: { display: "none" }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    amountOfMonths: 2,
    value,
    onChange: setValue
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
