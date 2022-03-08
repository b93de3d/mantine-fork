'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [data, setData] = React.useState(["React", "Angular", "Svelte", "Vue"]);
  const [value, onChange] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
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

exports.Demo = Demo;
exports.creatable = creatable;
//# sourceMappingURL=creatable.js.map
