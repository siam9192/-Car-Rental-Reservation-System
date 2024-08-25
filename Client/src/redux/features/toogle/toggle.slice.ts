import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  isSidebarOpen: boolean;
};
const initialState: TInitialState = {
  isSidebarOpen: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = toggleSlice.actions;

export default toggleSlice.reducer;
