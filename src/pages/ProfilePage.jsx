import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../services/github";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchGitHubUser(username);
        setUserData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [username]);

  if (loading) return <div>Loading....</div>;
  if (error) return <NotFoundPage />;

  return (
    <div>
      <h1>{userData?.name}</h1>
      <img src={userData?.avatar_url} alt={userData.login} width="100" />
      <p>{userData?.bio}</p>

      <div className="stats">
        <p>
          Followers:{" "}
          <Link to={`/users/${username}/followers`}>{userData?.followers}</Link>
        </p>
        <p>
          Following:{" "}
          <Link to={`/users/${username}/following`}>{userData?.following}</Link>
        </p>
        <p>
          Public Repos:{" "}
          <Link to={`/users/${username}/repos`}>{userData?.public_repos}</Link>
        </p>
        <p>
          Gists:{" "}
          <Link to={`/users/${username}/gists`}>{userData?.gists}</Link>
        </p>
      </div>

      <p>Company: {userData?.company || "N/A"}</p>
      <p>Location: {userData?.location || "N/A"}</p>
      <a href={userData?.blog} target="_blank">
        Website: {userData?.blog}
      </a>
    </div>
  );
};
export default ProfilePage;
