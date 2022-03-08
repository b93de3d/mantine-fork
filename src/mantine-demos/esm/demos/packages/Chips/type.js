import React from 'react';
import { Chips, Chip } from '@mantine/core';

const code = `
// Single chip can be selected at a time (radio input)
<Chips>{/* <Chip /> components */}</Chips>

// Multiple chips can be selected at a time (checkbox input)
<Chips multiple>{/* <Chip /> components */}</Chips>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chips, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "1"
  }, "Single chip"), /* @__PURE__ */ React.createElement(Chip, {
    value: "2"
  }, "Can be selected"), /* @__PURE__ */ React.createElement(Chip, {
    value: "3"
  }, "At a time")), /* @__PURE__ */ React.createElement(Chips, {
    position: "center",
    multiple: true,
    mt: 15
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "1"
  }, "Multiple chips"), /* @__PURE__ */ React.createElement(Chip, {
    value: "2"
  }, "Can be selected"), /* @__PURE__ */ React.createElement(Chip, {
    value: "3"
  }, "At a time")));
}
const type = {
  type: "demo",
  component: Demo,
  code
};

export { type };
//# sourceMappingURL=type.js.map
