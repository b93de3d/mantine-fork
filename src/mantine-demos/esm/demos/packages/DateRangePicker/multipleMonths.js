import React from 'react';
import { DateRangePicker } from '@mantine/dates';

const code = `
<DateRangePicker amountOfMonths={2} label="2 months" />
<DateRangePicker amountOfMonths={3} label="3 months" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DateRangePicker, {
    amountOfMonths: 2,
    label: "2 months",
    placeholder: "Two months"
  }), /* @__PURE__ */ React.createElement(DateRangePicker, {
    amountOfMonths: 3,
    label: "3 months",
    placeholder: "Three months",
    mt: "md"
  }));
}
const multipleMonths = {
  type: "demo",
  code,
  component: Demo
};

export { multipleMonths };
//# sourceMappingURL=multipleMonths.js.map
