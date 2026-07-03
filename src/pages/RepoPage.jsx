import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserRepository } from "../services/github";

const RepositoryPage = () => {
  const { username } = useParams();
  const [following, setRepository] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUserRepository(username)
      .then((data) => {
        setRepository(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading Repository...</div>;

  return (
    <div>
      <h2>{username}'s Repository:</h2>
      {following.map((Repository) => (
        <div key={Repository.id}>
          <img src={Repository.avatar_url} width="50" alt={Repository.login} />
          <Link to={`/users/${Repository.login}`}>{Repository.login}</Link>
        </div>
      ))}
    </div>
  );
};

export default RepositoryPage;
