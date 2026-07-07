import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserRepository } from "../../services/github.js";
import NotFoundPage from "../NotFoundPage.jsx";
import { RepoPageContainer, RepoGrid, RepoCard } from "./RepoPage.style.js";

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

  useEffect(() => {
  document.title = `${username}'s Repositories | GitHub Profiler`;
}, [username]);

  if (loading) return <div>Loading Repository...</div>;
  if (error) return <NotFoundPage />;
  //console.log("Repository", Repository);
  return (
    <RepoPageContainer>
      <h2>{username}'s Repository:</h2>
      {Repository.length === 0 ? (
        <p>{username} don't have any repository</p>
      ) : (
        <RepoGrid>
          {Repository.map((repo) => (
            <RepoCard key={repo.id}>
              <br />
              <Link to={`/users/${username}/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
              </Link>
            </RepoCard>
          ))}
        </RepoGrid>
      )}
    </RepoPageContainer>
  );
};

export default RepositoryPage;
