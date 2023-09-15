export const timeFunc = (time: string): string => {
    const d:Date = new Date(time)
  return time === ""
    ? "0"
    : [d.getHours(), d.getMinutes()]
        .map(function (x) {
          return x < 10 ? "0" + x : x;
        })
        .join(":");
};
