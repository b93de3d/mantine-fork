import React, { useState } from 'react';
import 'dayjs/locale/ru';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { useState } from 'react';
import 'dayjs/locale/ru';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month locale="ru" month={value} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(new Date());
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: value,
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
