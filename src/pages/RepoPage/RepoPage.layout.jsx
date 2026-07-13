import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUserRepository } from "../../services/github";
import NotFoundPage from "../NotFoundPage";
import BackButton from "../../components/common/BackButton";

import {
  RepoPageContainer,
  Header,
  Title,
  Subtitle,
  RepoGrid,
  RepoCard,
  RepoName,
  RepoDescription,
  RepoFooter,
  RepoMeta,
  Language,
  EmptyState,
} from "./RepoPage.style";
import RepositorySkeleton from "./RepositoryPageSkeleton";

const RepositoryPage = () => {
  const { username } = useParams();

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchUserRepository(username);

        setRepositories(data);
      } catch (err) {
        console.error(err);
        setError(true);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, [username]);

  useEffect(() => {
    document.title = `${username}'s Repositories | GitHub Profiler`;
  }, [username]);

  if (loading) {
    return (
      <RepoPageContainer>
        <BackButton />

        <Header>
          <Title>Repositories</Title>

          <Subtitle>Loading repositories...</Subtitle>
        </Header>

        <RepositorySkeleton />
      </RepoPageContainer>
    );
  }

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <RepoPageContainer>
      <BackButton />

      <Header>
        <Title>Repositories</Title>

        <Subtitle>
          {username} has {repositories.length} public{" "}
          {repositories.length === 1 ? "repository" : "repositories"}.
        </Subtitle>
      </Header>

      {repositories.length === 0 ? (
        <EmptyState>
          <h3>No repositories found</h3>

          <p>This GitHub user doesn't have any public repositories yet.</p>
        </EmptyState>
      ) : (
        <RepoGrid>
          {repositories.map((repo) => (
            <RepoCard
              key={repo.id}
              to={`/users/${username}/repos/${repo.name}`}
            >
              <RepoName>{repo.name}</RepoName>

              <RepoDescription>
                {repo.description || "No description provided."}
              </RepoDescription>

              <RepoFooter>
                <RepoMeta>
                  {repo.language && <Language>{repo.language}</Language>}

                  <span>⭐ {repo.stargazers_count}</span>

                  <span>⑂ {repo.forks_count}</span>
                </RepoMeta>

                <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
              </RepoFooter>
            </RepoCard>
          ))}
        </RepoGrid>
      )}
    </RepoPageContainer>
  );
};

export default RepositoryPage;
