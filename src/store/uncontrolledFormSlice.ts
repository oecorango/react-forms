import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: 0,
  email: '',
};

const noControlledSlice = createSlice({
  name: 'form no-controlled',
  initialState,

  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = noControlledSlice.actions;

export default noControlledSlice.reducer;
