import React from 'react';
import { Progress } from '@mantine/core';

const code = "<Progress value={75} animate />";
function Label() {
  return /* @__PURE__ */ React.createElement(Progress, {
    value: 75,
    animate: true
  });
}
const animations = {
  type: "demo",
  code,
  component: Label
};

export { animations };
//# sourceMappingURL=animations.js.map
