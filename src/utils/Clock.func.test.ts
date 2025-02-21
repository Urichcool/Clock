import { monthFunc } from "./monthFunc";
import { isDayFunc } from "./isDayFunc";
import { timeFunc } from "./timeFunc";
import { timeOfTheDayFunc } from "./timeOfTheDayFunc";

describe("monthFunc", () => {
  test("January", () => {
    expect(monthFunc(1)).toBe("January");
  });
  test("February", () => {
    expect(monthFunc(2)).toBe("February");
  });
  test("March", () => {
    expect(monthFunc(3)).toBe("March");
  });
  test("April", () => {
    expect(monthFunc(4)).toBe("April");
  });
  test("May", () => {
    expect(monthFunc(5)).toBe("May");
  });
  test("June", () => {
    expect(monthFunc(6)).toBe("June");
  });
  test("July", () => {
    expect(monthFunc(7)).toBe("July");
  });
  test("August", () => {
    expect(monthFunc(8)).toBe("August");
  });
  test("September", () => {
    expect(monthFunc(9)).toBe("September");
  });
  test("October", () => {
    expect(monthFunc(10)).toBe("October");
  });
  test("November", () => {
    expect(monthFunc(11)).toBe("November");
  });
  test("December", () => {
    expect(monthFunc(12)).toBe("December");
  });
  test("incorrect value", () => {
    expect(monthFunc(13)).toBe("");
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
