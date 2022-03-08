import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
<Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
  {/* Content here */}
</Spoiler>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    transitionDuration: 0
  });
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
