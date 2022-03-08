import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
<TransferList initialSelection={[['react', 'ng'], []]} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    initialSelection: [["react", "ng"], []]
  });
}
const initialSelection = {
  type: "demo",
  component: Demo,
  code
};

export { initialSelection };
//# sourceMappingURL=initialSelection.js.map
