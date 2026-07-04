import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserGists } from "../services/github";
import NotFoundPage from "./NotFoundPage";

const GistsPage = () => {
  const { username } = useParams();
  const [Gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadGists = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserGists(username);
        setGists(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setGists(null);
      } finally {
        setLoading(false);
      }
    };

    loadGists();
  }, [username]);

  if (loading) return <div>Loading Gists...</div>;
  if (error) return <NotFoundPage />;

  return (
    <div>
      <h2>{username}'s Gists:</h2>
      {Gists.length === 0 ? (
        <p>{username} don't have any Gists.</p>
      ) : (
        Gists.map((Gists) => (
          <div key={Gists.id}>
            <img src={Gists.avatar_url} width="50" alt={Gists.login} />
            <Link to={`/users/${Gists.login}`}>{Gists.login}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default GistsPage;
