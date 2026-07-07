import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage.layout";
import ProfilePage from "../pages/ProfilePage/ProfilePage.layout";
import NotFoundPage from "../pages/NotFoundPage";
import FollowerPage from "../pages/FollowPage/FollowersPage.layout";
import RepoPage from "../pages/RepoPage/RepoPage.layout";
import FollowingPage from "../pages/FollowPage/FollowingPage.layout";
import GistsPage from "../pages/GistsPage";
import RepoDetailPage from "../pages/RepoDetailPage/RepoDetailPage.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Yeh main layout hai
    children: [
      // Saare pages yahan children ban jayenge
      { index: true, element: <HomePage /> }, // Path "/"
      { path: "users/:username", element: <ProfilePage /> },
      { path: "users/:username/followers", element: <FollowerPage /> },
      { path: "users/:username/following", element: <FollowingPage /> },
      { path: "users/:username/repos", element: <RepoPage /> },
      { path: "users/:username/gists", element: <GistsPage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "users/:username/repos/:repoName", element: <RepoDetailPage /> },
    ],
  },
]);

const GitRouter = () => {
  return <RouterProvider router={router} />;
};

export default GitRouter;
