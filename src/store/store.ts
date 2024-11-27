// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
