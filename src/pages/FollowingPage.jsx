import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserFollowing } from "../services/github";
import NotFoundPage from "./NotFoundPage";

const FollowingPage = () => {
  const { username } = useParams();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFollowing = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserFollowing(username);
        setFollowing(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setFollowing(null);
      } finally {
        setLoading(false);
      }
    };

    loadFollowing();
  }, [username]);

  if (loading) return <div>Loading Following...</div>;
  if (error) return <NotFoundPage />;

  return (
    <div>
      <h2>{username}'s Following:</h2>
      {following.length === 0 ? (
        <p>{username} not following anyone.</p>
      ) : (
        following.map((following) => (
          <div key={following.id}>
            <img src={following.avatar_url} width="50" alt={following.login} />
            <Link to={`/users/${following.login}`}>{following.login}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default FollowingPage;
