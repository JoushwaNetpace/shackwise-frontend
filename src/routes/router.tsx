import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";

// Lazy load the components
const ChooseRole = lazy(() => import("../pages/Auth/ChooseRole/ChooseRole"));
const Register = lazy(() => import("../pages/Auth/Register/Register"));
const Login = lazy(() => import("../pages/Auth/Login/Login"));
const Menu = lazy(() => import("../pages/Auth/Menu/Menu"));
const SetPriorities = lazy(
  () => import("../pages/Auth/SetPriorities/SetPriorities")
);
const SearchProperty = lazy(
  () => import("../pages/Home/SearchProperty/SearchProperty")
);
const RateProperty = lazy(
  () => import("../pages/Home/RateProperty/RateProperty")
);
const LeaderBoard = lazy(() => import("../pages/Home/LeaderBoard/LeaderBoard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLayout />
      </Suspense>
    ),

    children: [
      {
        index: true,
        element: <Navigate to="choose-role" replace />, // Redirect root to /choose-role
      },
      {
        path: "choose-role",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ChooseRole />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "menu",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "set-priorities",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SetPriorities />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="search-property" replace />, // Redirect root to /search-property
      },
      {
        path: "search-property",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchProperty />
          </Suspense>
        ),
      },
      {
        path: "rate-property",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RateProperty />
          </Suspense>
        ),
      },
      {
        path: "leaderboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LeaderBoard />
          </Suspense>
        ),
      },
    ],
  },
]);
