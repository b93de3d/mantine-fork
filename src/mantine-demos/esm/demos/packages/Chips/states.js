import React from 'react';
import { Chips, Chip } from '@mantine/core';

const code = `
<Chips multiple value={['checked', 'checked-disabled']}>
  <Chip value="default">Default</Chip>
  <Chip value="checked">Checked</Chip>
  <Chip value="checked-disabled" disabled>
    Checked disabled
  </Chip>
</Chips>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chips, {
    multiple: true,
    value: ["checked", "checked-disabled"],
    position: "center",
    variant: "outline"
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "default"
  }, "Outline default"), /* @__PURE__ */ React.createElement(Chip, {
    value: "checked"
  }, "Outline checked"), /* @__PURE__ */ React.createElement(Chip, {
    value: "checked-disabled",
    disabled: true
  }, "Outline checked disabled")), /* @__PURE__ */ React.createElement(Chips, {
    multiple: true,
    value: ["checked", "checked-disabled"],
    position: "center",
    variant: "filled",
    style: { marginTop: 15 }
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "default"
  }, "Filled default"), /* @__PURE__ */ React.createElement(Chip, {
    value: "checked"
  }, "Filled checked"), /* @__PURE__ */ React.createElement(Chip, {
    value: "checked-disabled",
    disabled: true
  }, "Filled checked disabled")));
}
const states = {
  type: "demo",
  component: Demo,
  code
};

export { states };
//# sourceMappingURL=states.js.map
