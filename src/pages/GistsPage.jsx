import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserGists } from "../services/github";

const GistsPage = () => {
  const { username } = useParams();
  const [following, setGists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUserGists(username)
      .then((data) => {
        setGists(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading Gists...</div>;

  return (
    <div>
      <h2>{username}'s Gists:</h2>
      {following.map((Gists) => (
        <div key={Gists.id}>
          <img src={Gists.avatar_url} width="50" alt={Gists.login} />
          <Link to={`/users/${Gists.login}`}>{Gists.login}</Link>
        </div>
      ))}
    </div>
  );
};

export default GistsPage;
