import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../Features/background';

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
  },
});