import React, { useState } from 'react';
import { Group, Chip } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Chip value="chip" checked={checked} onChange={setChecked}>
      Just a chip
    </Chip>
  );
}
`;
function Demo() {
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "chip",
    checked,
    onChange: setChecked
  }, "Just a chip"));
}
const chip = {
  type: "demo",
  component: Demo,
  code
};

export { chip };
//# sourceMappingURL=chip.js.map
