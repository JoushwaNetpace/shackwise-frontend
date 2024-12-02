import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import LoadingPage from "../components/common/LoadingPage";
import ErrorBoundary from "../components/common/ErrorBoundary"; // Import the ErrorBoundary
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail";
import NotFound from "../components/common/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute"; // Import GuestRoute component

// Lazy load the components
const ChooseRole = lazy(() => import("../pages/Auth/ChooseRole/ChooseRole"));
const Register = lazy(() => import("../pages/Auth/Register/Register"));
const Login = lazy(() => import("../pages/Auth/Login/Login"));
const Menu = lazy(() => import("../pages/Auth/Menu/Menu"));
const SearchProperty = lazy(
  () => import("../pages/Home/SearchProperty/SearchProperty")
);
const RateProperty = lazy(
  () => import("../pages/Home/RateProperty/RateProperty")
);
const LeaderBoard = lazy(() => import("../pages/Home/LeaderBoard/LeaderBoard"));
const SetPriorities = lazy(
  () => import("../pages/Auth/SetPriorities/SetPriorities")
);

export const router = createBrowserRouter([
  // Auth Routes
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
          <GuestRoute>
            <ErrorBoundary>
              <Suspense fallback={<LoadingPage />}>
                <ChooseRole />
              </Suspense>
            </ErrorBoundary>
          </GuestRoute>
        ),
      },
      {
        path: "register",
        element: <Navigate to="/choose-role" replace />, // Redirect to choose-role
      },
      {
        path: "register/:userType",
        element: (
          <GuestRoute>
            <ErrorBoundary>
              <Suspense fallback={<LoadingPage />}>
                <Register />
              </Suspense>
            </ErrorBoundary>
          </GuestRoute>
        ),
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <ErrorBoundary>
              <Suspense fallback={<LoadingPage />}>
                <Login />
              </Suspense>
            </ErrorBoundary>
          </GuestRoute>
        ),
      },
      {
        path: "verify-email/:token",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <VerifyEmail />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "*", // Catch all unmatched routes
        element: (
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        ),
      },
    ],
  },

  // Menu Routes
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<LoadingPage />}>
          <AuthLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <Menu />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "set-priorities", // Use relative path
        element: (
          <ErrorBoundary>
            <Suspense fallback={<LoadingPage />}>
              <SetPriorities />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "*", // Catch all unmatched routes
        element: (
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        ),
      },
    ],
  },

  // Home Routes
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<LoadingPage />}>
          <MainLayout />
        </Suspense>
      </ProtectedRoute>
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
      {
        path: "*", // Catch all unmatched routes
        element: (
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
