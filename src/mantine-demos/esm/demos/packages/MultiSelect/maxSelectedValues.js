import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect maxSelectedValues={3} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Pick 3 values or less",
    placeholder: "Pick 3 values or less",
    searchable: true,
    maxSelectedValues: 3
  }));
}
const maxSelectedValues = {
  type: "demo",
  code,
  component: Demo
};

export { maxSelectedValues };
//# sourceMappingURL=maxSelectedValues.js.map
