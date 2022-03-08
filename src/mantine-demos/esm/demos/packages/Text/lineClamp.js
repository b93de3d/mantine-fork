import React from 'react';
import { Text, TypographyStylesProvider } from '@mantine/core';

const code = `
<Text lineClamp={3}>
  <TypographyStylesProvider>
    <h3>Line clamp with TypographyStylesProvider</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
      corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
      non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
      veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
      perspiciatis.
    </p>
  </TypographyStylesProvider>
</Text>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Text, {
    lineClamp: 3
  }, /* @__PURE__ */ React.createElement(TypographyStylesProvider, null, /* @__PURE__ */ React.createElement("h3", {
    style: { marginTop: 0 }
  }, "Line clamp with TypographyStylesProvider"), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")));
}
const lineClamp = {
  type: "demo",
  code,
  component: Demo
};

export { lineClamp };
//# sourceMappingURL=lineClamp.js.map
