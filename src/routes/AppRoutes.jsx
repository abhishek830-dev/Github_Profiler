import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import FollowerPage from "../pages/FollowersPage";
import RepoPage from "../pages/RepoPage";
import FollowingPage from "../pages/FollowingPage";
import GistsPage from "../pages/GistsPage";

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
    ],
  },
]);

const GitRouter = () => {
  return <RouterProvider router={router} />;
};

export default GitRouter;
