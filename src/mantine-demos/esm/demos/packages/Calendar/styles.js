import React from 'react';
import { useMantineTheme, Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar
  initialMonth={new Date(2021, 7)}
  dayStyle={(date) =>
    date.getDay() === 5 && date.getDate() === 13
      ? { backgroundColor: theme.colors.red[9], color: theme.white }
      : null
  }
/>
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    initialMonth: new Date(2021, 7),
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
