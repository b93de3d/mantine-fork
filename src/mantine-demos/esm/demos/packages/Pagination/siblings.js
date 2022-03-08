import React from 'react';
import { Text, Pagination } from '@mantine/core';

const code = `
  <Pagination total={20} siblings={3} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    style: { marginBottom: 10 }
  }, "1 sibling (default)"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    siblings: 1,
    initialPage: 10
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "2 siblings"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    siblings: 2,
    initialPage: 10
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "3 siblings"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    siblings: 3,
    initialPage: 10
  }));
}
const siblings = {
  type: "demo",
  code,
  component: Demo
};

export { siblings };
//# sourceMappingURL=siblings.js.map
