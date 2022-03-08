import React from 'react';
import { Text, Pagination } from '@mantine/core';

const code = `
  <Pagination total={20} boundaries={3} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    style: { marginBottom: 10 }
  }, "1 boundary (default)"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    boundaries: 1,
    initialPage: 10
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "2 boundaries"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    boundaries: 2,
    initialPage: 10
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "3 boundaries"), /* @__PURE__ */ React.createElement(Pagination, {
    total: 20,
    boundaries: 3,
    initialPage: 10
  }));
}
const boundaries = {
  type: "demo",
  code,
  component: Demo
};

export { boundaries };
//# sourceMappingURL=boundaries.js.map
