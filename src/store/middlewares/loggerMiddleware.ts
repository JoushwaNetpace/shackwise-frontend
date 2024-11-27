// src/store/middlewares/loggerMiddleware.ts
import { Middleware } from "redux";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action); // Pass action to the next middleware or reducer
  console.log("Next state:", store.getState());
  return result; // Return the result of the next middleware
};

export default loggerMiddleware;
