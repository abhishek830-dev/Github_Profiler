import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserRepository } from "../services/github";
import NotFoundPage from "./NotFoundPage";

const RepositoryPage = () => {
  const { username } = useParams();
  const [Repository, setRepository] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRepo = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserRepository(username);
        setRepository(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setRepository(null);
      } finally {
        setLoading(false);
      }
    };

    loadRepo();
  }, [username]);

  if (loading) return <div>Loading Repository...</div>;
  if (error) return <NotFoundPage />;
  //console.log("Repository", Repository);
  return (
    <div>
      <h2>{username}'s Repository:</h2>
      {Repository.length === 0 ? (
        <p>{username} don't have any repository</p>
      ) : (
        Repository.map((Repository) => (
          <div key={Repository.id}>
            <img src={Repository.avatar_url} width="50" alt={Repository.name} />
            <p>{Repository.name}</p>
            <Link to={`/users/${Repository.owner.login}`}>
              {Repository.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RepositoryPage;
