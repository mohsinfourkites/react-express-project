import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import packageSlice from './slices/packageSlice';
import dateRangeReducer from './slices/dateRangeSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    packages: packageSlice,
    dateRange: dateRangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
