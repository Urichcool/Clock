import { isDaySwitcher, appReducer, moreSwitcher } from "./appSlice";
import { isDayFunc } from "../../utils/isDayFunc";

describe("Actions test", () => {
  test("is-day test", () => {
    expect(
      appReducer(
        {
          isMoreOpen: false,
          quote: { quote: "", author: "" },
          quoteIsLoading: false,
          quoteIsError: false,
          isDay: false,
        },
        isDaySwitcher(isDayFunc("2023-09-20T05:00:00.259157+02:00"))
      )
    ).toEqual({
      isMoreOpen: false,
      quote: { quote: "", author: "" },
      quoteIsLoading: false,
      quoteIsError: false,
      isDay: true,
    });
  });
  test("is more open test", () => {
    expect(
      appReducer(
        {
          isMoreOpen: false,
          quote: { quote: "", author: "" },
          quoteIsLoading: false,
          quoteIsError: false,
          isDay: false,
        },
        moreSwitcher(true)
      )
    ).toEqual({
      isMoreOpen: true,
      quote: { quote: "", author: "" },
      quoteIsLoading: false,
      quoteIsError: false,
      isDay: false,
    });
  });
});
  