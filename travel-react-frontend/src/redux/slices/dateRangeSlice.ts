// dateRangeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateRangeState {
  startDate: string | null;
  endDate: string | null;
}

const initialState: DateRangeState = {
  startDate: null,
  endDate: null,
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setStartDate(state, action: PayloadAction<string | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string | null>) {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;