import { padTime } from '../pad-time/pad-time.js';

function getTimeValues(value, format) {
  if (!(value instanceof Date)) {
    return { hours: "", minutes: "", seconds: "", amPm: "" };
  }
  let _hours = value.getHours();
  const isPm = _hours >= 12;
  if (format === "12") {
    _hours %= 12;
    if (_hours === 0) {
      _hours += 12;
    }
  }
  return {
    hours: padTime(_hours.toString()),
    minutes: padTime(value.getMinutes().toString()),
    seconds: padTime(value.getSeconds().toString()),
    amPm: isPm ? "pm" : "am"
  };
}

export { getTimeValues };
//# sourceMappingURL=get-time-value.js.map
