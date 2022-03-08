import React from 'react';
import { Table } from '@mantine/core';
import { elements } from './data.js';

const code = `
import { Table } from '@mantine/core';

function Demo() {
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table captionSide="bottom">
      <caption>Some elements from periodic table</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}
`;
function Demo() {
  const rows = elements.map((element) => /* @__PURE__ */ React.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React.createElement("td", null, element.position), /* @__PURE__ */ React.createElement("td", null, element.name), /* @__PURE__ */ React.createElement("td", null, element.symbol), /* @__PURE__ */ React.createElement("td", null, element.mass)));
  const ths = /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Element position"), /* @__PURE__ */ React.createElement("th", null, "Element name"), /* @__PURE__ */ React.createElement("th", null, "Symbol"), /* @__PURE__ */ React.createElement("th", null, "Atomic mass"));
  return /* @__PURE__ */ React.createElement(Table, {
    captionSide: "bottom"
  }, /* @__PURE__ */ React.createElement("caption", null, "Some elements from periodic table"), /* @__PURE__ */ React.createElement("thead", null, ths), /* @__PURE__ */ React.createElement("tbody", null, rows), /* @__PURE__ */ React.createElement("tfoot", null, ths));
}
const captions = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, captions };
//# sourceMappingURL=captions.js.map
