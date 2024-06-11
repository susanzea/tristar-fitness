export const getWeekday = (weekdayIdx, d = new Date()) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? 6 : weekdayIdx); // adjust when day is sunday

  return new Date(d.setDate(diff));
};

export const formatDate = (dt) => {
  return dt.toDateString().split(" ").slice(1).join(" ");
};

export const addOrSubWeek = (dateObj, op) => {
  const copy = new Date (dateObj);
  copy.setDate(op === "-" ? copy.getDate() - 7 : copy.getDate() + 7);
  
  return copy;
};

export const paramsGenerator = (paramObj) => {
  const params = [];
  for (const paramPair in paramObj) {
    const value = paramObj[paramPair];
    params.push(`${paramPair}=${value}`)
  }

  return params.join('&');
}