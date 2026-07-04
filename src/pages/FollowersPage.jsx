import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserFollowers } from "../services/github";
import NotFoundPage from "./NotFoundPage";
import "../components/card.css";

const FollowerPage = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFollower = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserFollowers(username);
        setFollowers(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setFollowers(null);
      } finally {
        setLoading(false);
      }
    };

    loadFollower();
  }, [username]);

  if (loading) return <div>Loading Followers...</div>;
  if (error) return <NotFoundPage />;

  return (
    <div className="grid-container">
      <h2>{username}'s Followers:</h2>
      {followers.length === 0 ? (
        <p>{username} don't have any followers.</p>
      ) : (
        <div className="repo-grid">
          {" "}
          {followers.map((follower) => (
            <div key={follower.id} className="card">
              <img src={follower.avatar_url} width="50" alt={follower.login} />
              <Link to={`/users/${follower.login}`}>{follower.login}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowerPage;
