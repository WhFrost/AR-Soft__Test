import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import {createAPI} from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
