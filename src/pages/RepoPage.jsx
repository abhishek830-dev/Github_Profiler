import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserRepository } from "../services/github";
import NotFoundPage from "./NotFoundPage";
import "./RepoPage.css";

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
    <div className="repo-page-container">
      <h2>{username}'s Repository:</h2>
      {Repository.length === 0 ? (
        <p>{username} don't have any repository</p>
      ) : (
        <div className="repo-grid">
          {Repository.map((repo) => (
            <div key={repo.id} className="repo-card">
              <br />
              {/* <img src={repo.avatar_url} width="50" alt={repo.name} /> */}
              {/* <p>{repo.name}</p> */}
              <Link to={`/users/${username}/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepositoryPage;
