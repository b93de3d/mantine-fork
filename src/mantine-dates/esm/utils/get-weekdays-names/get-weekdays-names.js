import dayjs from 'dayjs';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week.js';

function getWeekdaysNames(locale, firstDayOfWeek = "monday") {
  const names = [];
  const date = getStartOfWeek(new Date(), firstDayOfWeek);
  for (let i = 0; i < 7; i += 1) {
    names.push(dayjs(date).locale(locale).format("dd"));
    date.setDate(date.getDate() + 1);
  }
  return names;
}

export { getWeekdaysNames };
//# sourceMappingURL=get-weekdays-names.js.map
