import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

const code = `
const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

<Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
<Slider defaultValue={40} marks={marks} />
<RangeSlider defaultValue={[20, 80]} marks={marks} />
`;
function Demo() {
  const marks2 = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { paddingBottom: 30 }
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    marks: [{ value: 10 }, { value: 40 }, { value: 95 }]
  })), /* @__PURE__ */ React.createElement("div", {
    style: { paddingBottom: 30 }
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    marks: marks2
  })), /* @__PURE__ */ React.createElement("div", {
    style: { paddingBottom: 25 }
  }, /* @__PURE__ */ React.createElement(RangeSlider, {
    defaultValue: [20, 80],
    marks: marks2
  })));
}
const marks = {
  type: "demo",
  component: Demo,
  code
};

export { marks };
//# sourceMappingURL=marks.js.map
