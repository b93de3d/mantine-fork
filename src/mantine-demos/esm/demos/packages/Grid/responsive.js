import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
<Grid>
  <Grid.Col md={6} lg={3}>1</Grid.Col>
  <Grid.Col md={6} lg={3}>2</Grid.Col>
  <Grid.Col md={6} lg={3}>3</Grid.Col>
  <Grid.Col md={6} lg={3}>4</Grid.Col>
</Grid>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, {
    md: 6,
    lg: 3
  }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, {
    md: 6,
    lg: 3
  }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, {
    md: 6,
    lg: 3
  }, "3"), /* @__PURE__ */ React.createElement(ColWrapper, {
    md: 6,
    lg: 3
  }, "4"));
}
const responsive = {
  type: "demo",
  code,
  component: Demo
};

export { responsive };
//# sourceMappingURL=responsive.js.map
