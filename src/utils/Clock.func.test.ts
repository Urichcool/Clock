import { dayOfWeekFunc } from "./dayOfWeekFunc";
import { isDayFunc } from "./isDayFunc";
import { timeFunc } from "./timeFunc";
import { timeOfTheDayFunc } from "./timeOfTheDayFunc";

describe("dayOfWeekFunc", () => {
  test("sunday", () => {
    expect(dayOfWeekFunc(0)).toBe("Sunday");
  });
  test("monday", () => {
    expect(dayOfWeekFunc(1)).toBe("Monday");
  });
  test("tuesday", () => {
    expect(dayOfWeekFunc(2)).toBe("Tuesday");
  });
  test("wednesday", () => {
    expect(dayOfWeekFunc(3)).toBe("Wednesday");
  });
  test("thursday", () => {
    expect(dayOfWeekFunc(4)).toBe("Thursday");
  });
  test("friday", () => {
    expect(dayOfWeekFunc(5)).toBe("Friday");
  });
  test("saturday", () => {
    expect(dayOfWeekFunc(6)).toBe("Saturday");
  });
  test("incorrect value", () => {
    expect(dayOfWeekFunc(7)).toBe("");
  });
});

describe("isDayFunc", () => {
  test("isDay", () => {
    expect(isDayFunc("2023-09-20T17:59:52.259157+02:00")).toBe(true);
  });
  test("isNight", () => {
    expect(isDayFunc("2023-09-20T04:59:52.259157+02:00")).toBe(false);
  });
  test("isEmpty", () => {
    expect(isDayFunc("")).toBe(false);
  });
});

describe("timeFunc", () => {
  test("correctTime", () => {
    expect(timeFunc("2023-09-20T12:00:52.259157+02:00")).toBe("12:00");
  });
  test("emptyTime", () => {
    expect(timeFunc("")).toBe("0");
  });
});

describe("timeOfTheDayFunc", () => {
  test("morning", () => {
    expect(timeOfTheDayFunc(5)).toBe("Good morning");
  });
  test("afternoon", () => {
    expect(timeOfTheDayFunc(13)).toBe("Good afternoon");
  });
  test("evening", () => {
    expect(timeOfTheDayFunc(19)).toBe("Good evening");
  });
});
