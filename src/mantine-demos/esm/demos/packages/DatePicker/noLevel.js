import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker allowLevelChange={false} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "No level change",
    label: "Event date",
    allowLevelChange: false
  }));
}
const noLevel = {
  type: "demo",
  code,
  component: Demo
};

export { noLevel };
//# sourceMappingURL=noLevel.js.map
