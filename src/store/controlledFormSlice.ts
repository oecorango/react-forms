import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Users } from '../interfaces/state';

const initialState: Users = {
  users: [],
};

const controlledSlice = createSlice({
  name: 'form controlled',
  initialState,

  reducers: {
    setState(state, action: PayloadAction<User>) {
      state.users.push({
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        gender: action.payload.gender,
        terms: action.payload.terms,
        country: action.payload.country,
        image: action.payload.image,
      });
    },
    // setImage(state, action: PayloadAction<User>) {
    //   state.users.push({
    //     image: action.payload.image,
    //   });
    // },
  },
});

export const { setState } = controlledSlice.actions;

export default controlledSlice.reducer;
