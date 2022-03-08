import React from 'react';
import { Title, Text } from '@mantine/core';

const code = `
<Title order={3}>Highlight <Text color="blue" inherit component="span">something</Text>in title</Title>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Title, {
    order: 3
  }, "Title in which you want to", " ", /* @__PURE__ */ React.createElement(Text, {
    color: "blue",
    inherit: true,
    component: "span"
  }, "highlight"), " ", "something");
}
const inherit = {
  type: "demo",
  component: Demo,
  code
};

export { inherit };
//# sourceMappingURL=inherit.js.map
