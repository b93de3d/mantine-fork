'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [data, setData] = React.useState(["React", "Angular", "Svelte", "Vue"]);
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
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

exports.Demo = Demo;
exports.creatable = creatable;
//# sourceMappingURL=creatable.js.map
