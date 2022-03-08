import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
<TransferList listHeight={100} listComponent="div" {/* ...other props */} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    listHeight: 100,
    breakpoint: "sm",
    listComponent: "div"
  });
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

export { scrollbars };
//# sourceMappingURL=scrollbars.js.map
