import { configureStore } from '@reduxjs/toolkit';
import controlFormReducer from './controlledFormSlice';
import unControlFormReducer from './uncontrolledFormSlice';

export const store = configureStore({
  reducer: {
    controlledForm: controlFormReducer,
    unControlledForm: unControlFormReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
