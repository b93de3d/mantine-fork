import React, { useState } from 'react';
import { Select } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Select } from '@mantine/core';

export function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);
  return (
    <Select
      label="Creatable Select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
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
  const [value, onChange] = useState(null);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Select, {
    label: "Creatable Select",
    data,
    value,
    onChange,
    placeholder: "Select items",
    nothingFound: "Nothing found",
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
