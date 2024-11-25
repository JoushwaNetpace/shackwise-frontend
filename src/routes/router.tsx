import { createBrowserRouter, Navigate } from "react-router-dom";
import ChooseRole from "../pages/Auth/ChooseRole/ChooseRole";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Menu from "../pages/Auth/Menu/Menu";
import SetPriorities from "../pages/Auth/SetPriorities/SetPriorities";
import { MainLayout } from "../layouts/MainLayout";
import SearchProperty from "../pages/Home/SearchProperty/SearchProperty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,

    children: [
      {
        index: true,
        element: <Navigate to="choose-role" replace />, // Redirect root to /choose-role
      },
      {
        path: "choose-role", // No leading slash, it's a child path
        element: <ChooseRole />,
      },
      {
        path: "register", // No leading slash, it's a sibling path to choose-role
        element: <Register />,
      },
      {
        path: "login", // No leading slash, it's a sibling path to choose-role
        element: <Login />,
      },
      {
        path: "menu", // No leading slash, it's a sibling path to choose-role
        element: <Menu />,
      },
      {
        path: "set-priorities", // No leading slash, it's a sibling path to choose-role
        element: <SetPriorities />,
      },
    ],
  },
  {
    path: "/home",
    element: <MainLayout />, // A separate layout for Home routes (optional)
    children: [
      {
        index: true,
        element: <Navigate to="search-property" replace />, // Redirect root to /choose-role
      },
      {
        path: "search-property",
        element: <SearchProperty />,
      },
    ],
  },
]);
