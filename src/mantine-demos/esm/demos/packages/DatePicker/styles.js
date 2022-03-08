import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    dayStyle: (date) => date.getDay() === 5 && date.getDate() === 13 ? { backgroundColor: theme.colors.red[9], color: theme.white } : null
  }));
}
const styles = {
  type: "demo",
  code,
  component: Demo
};

export { styles };
//# sourceMappingURL=styles.js.map
