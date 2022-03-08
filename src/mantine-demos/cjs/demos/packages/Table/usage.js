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
  const rows = data.elements.map((element) => /* @__PURE__ */ React__default.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React__default.createElement("td", null, element.position), /* @__PURE__ */ React__default.createElement("td", null, element.name), /* @__PURE__ */ React__default.createElement("td", null, element.symbol), /* @__PURE__ */ React__default.createElement("td", null, element.mass)));
  return /* @__PURE__ */ React__default.createElement(core.Table, null, /* @__PURE__ */ React__default.createElement("thead", null, /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("th", null, "Element position"), /* @__PURE__ */ React__default.createElement("th", null, "Element name"), /* @__PURE__ */ React__default.createElement("th", null, "Symbol"), /* @__PURE__ */ React__default.createElement("th", null, "Atomic mass"))), /* @__PURE__ */ React__default.createElement("tbody", null, rows));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.usage = usage;
//# sourceMappingURL=usage.js.map
