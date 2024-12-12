// src/store/middlewares/loggerMiddleware.ts
import { Middleware } from "redux";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action); // Pass action to the next middleware or reducer
  return result; // Return the result of the next middleware
};

export default loggerMiddleware;
