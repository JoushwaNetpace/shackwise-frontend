// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userReducer";
import authReducer from "./slices/auth/authReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    // Add other reducers here as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
