export const isDayFunc = (time: string): boolean => {
    const date: Date = new Date(time)
    const hours:number = date.getHours();
  return hours >= 5 && hours < 18;
};
