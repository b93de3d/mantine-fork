import React from 'react';
import { MediaQuery, Text } from '@mantine/core';

const code = `
<MediaQuery
  query="(max-width: 1200px) and (min-width: 800px)"
  styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
>
  <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MediaQuery, {
    query: "(max-width: 1200px) and (min-width: 800px)",
    styles: { fontSize: 20, "&:hover": { backgroundColor: "silver" } }
  }, /* @__PURE__ */ React.createElement(Text, null, "(max-width: 1200px) and (min-width: 800px) breakpoints"));
}
const query = {
  type: "demo",
  component: Demo,
  code
};

export { query };
//# sourceMappingURL=query.js.map
