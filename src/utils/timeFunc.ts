export const timeFunc = (time: string): string => {
    const d:Date = new Date(time)
  return time === ""
    ? "00:00"
    : [d.getHours(), d.getMinutes()]
        .map(function (x) {
          return x < 10 ? "0" + x : x;
        })
        .join(":");
};
