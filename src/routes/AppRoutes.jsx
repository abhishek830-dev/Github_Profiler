import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.layout"));
const ProfilePage = lazy(
  () => import("../pages/ProfilePage/ProfilePage.layout"),
);
const RepoPage = lazy(() => import("../pages/RepoPage/RepoPage.layout"));
const RepoDetailPage = lazy(
  () => import("../pages/RepoDetailPage/RepoDetailPage.layout"),
);
const FollowersPage = lazy(
  () => import("../pages/FollowPage/FollowersPage.layout"),
);
const FollowingPage = lazy(
  () => import("../pages/FollowPage/FollowingPage.layout"),
);
const GistsPage = lazy(() => import("../pages/GistsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Loader = () => <div />;

const withSuspense = (element) => (
  <Suspense fallback={<Loader />}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<HomePage />),
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/users/:username",
        element: withSuspense(<ProfilePage />),
      },
      {
        path: "/users/:username/followers",
        element: withSuspense(<FollowersPage />),
      },
      {
        path: "/users/:username/following",
        element: withSuspense(<FollowingPage />),
      },
      {
        path: "/users/:username/repos",
        element: withSuspense(<RepoPage />),
      },
      {
        path: "/users/:username/repos/:repoName",
        element: withSuspense(<RepoDetailPage />),
      },
      {
        path: "/users/:username/gists",
        element: withSuspense(<GistsPage />),
      },
    ],
  },
  {
    path: "*",
    element: withSuspense(<NotFoundPage />),
  },
]);

const GitRouter = () => <RouterProvider router={router} />;

export default GitRouter;
