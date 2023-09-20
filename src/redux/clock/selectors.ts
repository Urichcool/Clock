import type { RootState } from "../store";

export const selectDayNightSwitcher = (state: RootState) => state.clock.isDay;
export const selectTime = (state: RootState) => state.clock.time;
export const selectLocation = (state: RootState) => state.clock.location;