'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var data = require('./data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const rows = data.elements.map((element) => /* @__PURE__ */ React__default.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React__default.createElement("td", null, element.position), /* @__PURE__ */ React__default.createElement("td", null, element.name), /* @__PURE__ */ React__default.createElement("td", null, element.symbol), /* @__PURE__ */ React__default.createElement("td", null, element.mass)));
  const ths = /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("th", null, "Element position"), /* @__PURE__ */ React__default.createElement("th", null, "Element name"), /* @__PURE__ */ React__default.createElement("th", null, "Symbol"), /* @__PURE__ */ React__default.createElement("th", null, "Atomic mass"));
  return /* @__PURE__ */ React__default.createElement(core.Table, {
    captionSide: "bottom"
  }, /* @__PURE__ */ React__default.createElement("caption", null, "Some elements from periodic table"), /* @__PURE__ */ React__default.createElement("thead", null, ths), /* @__PURE__ */ React__default.createElement("tbody", null, rows), /* @__PURE__ */ React__default.createElement("tfoot", null, ths));
}
const captions = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.captions = captions;
//# sourceMappingURL=captions.js.map
