import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    onFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;
export default filterSlice.reducer;
