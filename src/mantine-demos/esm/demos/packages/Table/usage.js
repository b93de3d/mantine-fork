import React from 'react';
import { Table } from '@mantine/core';
import { elements } from './data.js';

const code = `
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
`;
function Demo() {
  const rows = elements.map((element) => /* @__PURE__ */ React.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React.createElement("td", null, element.position), /* @__PURE__ */ React.createElement("td", null, element.name), /* @__PURE__ */ React.createElement("td", null, element.symbol), /* @__PURE__ */ React.createElement("td", null, element.mass)));
  return /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Element position"), /* @__PURE__ */ React.createElement("th", null, "Element name"), /* @__PURE__ */ React.createElement("th", null, "Symbol"), /* @__PURE__ */ React.createElement("th", null, "Atomic mass"))), /* @__PURE__ */ React.createElement("tbody", null, rows));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, usage };
//# sourceMappingURL=usage.js.map
