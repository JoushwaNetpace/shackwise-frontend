import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import LoadingPage from "../components/common/LoadingPage";
import ErrorBoundary from "../components/common/ErrorBoundary"; // Import the ErrorBoundary

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
      <Suspense fallback={<LoadingPage />}>
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
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <ChooseRole />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "register/:userType",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <Register />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <Login />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "menu",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <Menu />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "set-priorities",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <SetPriorities />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<LoadingPage />}>
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
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <SearchProperty />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "rate-property",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <RateProperty />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "leaderboard",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <LeaderBoard />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
