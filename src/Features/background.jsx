import {createSlice} from '@reduxjs/toolkit';

const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    color: 'white', // Default background color
    backgroundColor: 'white', // Default background color
  },
  reducers: {
    setBackgroundColor: (state) => {
      state.backgroundColor = state.backgroundColor === 'white' ? 'black' : 'white';
      state.color = state.color === 'white' ? 'black' : 'white';
    },
  },
});

export const { setBackgroundColor } = backgroundSlice.actions;
export default backgroundSlice.reducer;