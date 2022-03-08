import React from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = "<Calendar allowLevelChange={false} />";
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    value: null,
    allowLevelChange: false
  }));
}
const noLevel = {
  type: "demo",
  code,
  component: Demo
};

export { noLevel };
//# sourceMappingURL=noLevel.js.map
