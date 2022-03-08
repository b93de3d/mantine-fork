import React from 'react';
import { Kbd } from '@mantine/core';

const code = `
<Kbd>\u2318</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Kbd, null, "\u2318"), " + ", /* @__PURE__ */ React.createElement(Kbd, null, "shift"), " + ", /* @__PURE__ */ React.createElement(Kbd, null, "M"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
