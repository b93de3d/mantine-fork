import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data.js';

const code = `
<MultiSelect
  data={data}
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  searchable
  nothingFound="Nothing found"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    searchable: true,
    nothingFound: "Nothing found"
  }));
}
const searchable = {
  type: "demo",
  code,
  component: Demo
};

export { searchable };
//# sourceMappingURL=searchable.js.map
