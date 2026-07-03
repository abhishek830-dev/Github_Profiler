import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import FollowerPage from "../pages/FollowersPage";
import RepoPage from "../pages/RepoPage";
import FollowingPage from "../pages/FollowingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users/:username",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/users/:username/followers",
    element: <FollowerPage />,
  },
  {
    path: "/users/:username/following",
    element: <FollowingPage />,
  },
  {
    path: "/users/:username/repos",
    element: <RepoPage />,
  },
]);

const GitRouter = () => {
  return <RouterProvider router={router} />;
};

export default GitRouter;
