export const getWeekday = (weekdayIdx, d = new Date()) => {
  console.log(`d: ${d}`)
  debugger;
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? 6 : weekdayIdx); // adjust when day is sunday

  return new Date(d.setDate(diff));
};

export const formatDate = (dt) => {
  return dt.toDateString().split(" ").slice(1).join(" ");
};
