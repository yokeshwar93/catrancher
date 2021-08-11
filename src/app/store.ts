import { configureStore } from '@reduxjs/toolkit';
import catRancherReducer from '../store/reducers/catRancherSlice';

export const store = configureStore({
  reducer: {
    catRancher: catRancherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

