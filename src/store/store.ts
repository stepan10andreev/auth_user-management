import { configureStore } from "@reduxjs/toolkit";
import userManagementReducer from './userManagement';

export const store = configureStore({
  reducer: {
    userManagement: userManagementReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
