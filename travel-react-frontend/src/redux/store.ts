import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import packageSlice from './slices/packageSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    packages: packageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
