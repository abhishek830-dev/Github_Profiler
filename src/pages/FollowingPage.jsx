import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserFollowing } from "../services/github";

const FollowingPage = () => {
  const { username } = useParams();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUserFollowing(username)
      .then((data) => {
        setFollowing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading Following...</div>;

  return (
    <div>
      <h2>{username}'s Following:</h2>
      {following.map((following) => (
        <div key={following.id}>
          <img src={following.avatar_url} width="50" alt={following.login} />
          <Link to={`/users/${following.login}`}>{following.login}</Link>
        </div>
      ))}
    </div>
  );
};

export default FollowingPage;
