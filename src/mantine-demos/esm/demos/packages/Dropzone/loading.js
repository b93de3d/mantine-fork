import React from 'react';
import { BaseDemo } from './_base.js';

const code = `
<Dropzone loading>
  {/* children */}
</Dropzone>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(BaseDemo, {
    loading: true
  });
}
const loading = {
  type: "demo",
  component: Demo,
  code
};

export { loading };
//# sourceMappingURL=loading.js.map
