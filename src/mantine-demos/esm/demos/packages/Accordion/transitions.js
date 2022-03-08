import React from 'react';
import { BaseDemo } from './_base.js';

const disableTransitions = {
  type: "demo",
  component: () => /* @__PURE__ */ React.createElement(BaseDemo, {
    transitionDuration: 0,
    sx: { maxWidth: 560 },
    mx: "auto"
  }),
  code: "<Accordion transitionDuration={0} />"
};
const customTransitions = {
  type: "demo",
  component: () => /* @__PURE__ */ React.createElement(BaseDemo, {
    transitionDuration: 1e3,
    sx: { maxWidth: 560 },
    mx: "auto"
  }),
  code: "<Accordion transitionDuration={1000} /> // -> 1000ms transition duration"
};

export { customTransitions, disableTransitions };
//# sourceMappingURL=transitions.js.map
