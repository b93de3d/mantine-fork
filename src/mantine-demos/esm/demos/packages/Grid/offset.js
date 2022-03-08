import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
<Grid>
  <Grid.Col span={3}>1</Grid.Col>
  <Grid.Col span={3}>2</Grid.Col>
  <Grid.Col span={3} offset={3}>3</Grid.Col>
</Grid>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3
  }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3
  }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3,
    offset: 3
  }, "3"));
}
const offset = {
  type: "demo",
  code,
  component: Demo
};

export { offset };
//# sourceMappingURL=offset.js.map
