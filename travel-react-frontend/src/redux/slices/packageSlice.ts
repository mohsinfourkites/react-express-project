import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface PackageState {
  packages: Package[];
}

const initialState: PackageState = {
  packages: [],
};

const packageSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setPackages: (state, action: PayloadAction<Package[]>) => {
      state.packages = action.payload;
    },
  },
});

export const { setPackages } = packageSlice.actions;
export default packageSlice.reducer;
