import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage for web)
import userReducer from "./slices/user/userReducer";
import authReducer from "./slices/auth/authReducer";
import priorityReducer from "./slices/priority/priorityReducer";
import propertyReducer from "./slices/property/propertyReducer";
import modalReducer from "./slices/modal/modalReducer";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  priority: priorityReducer,
  property: propertyReducer,
  modal: modalReducer,
  // Add other reducers here as needed
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
