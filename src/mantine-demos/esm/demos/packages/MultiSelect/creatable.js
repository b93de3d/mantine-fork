import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <MultiSelect
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => setData((current) => [...current, query])}
    />
  );
}
`;
function Demo() {
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    label: "Creatable MultiSelect",
    data,
    placeholder: "Select items",
    searchable: true,
    creatable: true,
    getCreateLabel: (query) => `+ Create ${query}`,
    onCreate: (query) => setData((current) => [...current, query])
  }));
}
const creatable = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, creatable };
//# sourceMappingURL=creatable.js.map
