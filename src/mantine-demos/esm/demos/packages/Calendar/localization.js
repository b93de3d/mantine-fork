import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = '<Calendar locale="ru" />';
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    value,
    onChange: setValue,
    locale: "ru"
  }));
}
const localization = {
  type: "demo",
  code,
  component: Demo
};

export { localization };
//# sourceMappingURL=localization.js.map
