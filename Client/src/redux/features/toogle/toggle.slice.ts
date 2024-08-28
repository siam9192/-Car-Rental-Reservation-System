import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  isSidebarOpen: boolean;
  isDashboardSidebarOpen: boolean;
  isLogging: boolean;
};
const initialState: TInitialState = {
  isSidebarOpen: false,
  isDashboardSidebarOpen: false,
  isLogging: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDashboardSidebar: (state) => {
      state.isDashboardSidebarOpen = !state.isDashboardSidebarOpen;
    },
    toggleLogging: (state) => {
      state.isLogging = !state.isLogging;
    },
  },
});

export const { toggleSidebar, toggleDashboardSidebar, toggleLogging } =
  toggleSlice.actions;

export default toggleSlice.reducer;
