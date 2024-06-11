export const getWeekday = (weekdayIdx, d = new Date()) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? 6 : weekdayIdx); // adjust when day is sunday

  return new Date(d.setDate(diff));
};

export const formatDate = (dt) => {
  return dt.toDateString().split(" ").slice(1).join(" ");
};

export const getDay = (dateObj) => {
  const idx = dateObj.getDay();

  const weekdaysByIdx = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  return weekdaysByIdx[idx];
};

export const addOrSubWeek = (dateObj, op) => {
  const copy = new Date(dateObj);
  copy.setDate(op === "-" ? copy.getDate() - 7 : copy.getDate() + 7);

  return copy;
};

export const paramsGenerator = (paramObj) => {
  const params = [];
  for (const paramPair in paramObj) {
    const value = paramObj[paramPair];
    params.push(`${paramPair}=${value}`);
  }

  return params.join("&");
};

export const convertMinsToHours = (mins) => {
  const hours = mins / 60;
  const mins_over = mins % 60;

  return `${Math.floor(hours)}h ${mins_over}min`;
};
