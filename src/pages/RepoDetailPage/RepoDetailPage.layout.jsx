import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserRepoDetails } from "../../services/github";
import NotFoundPage from "../NotFoundPage";
import {
  RepoContainer,
  StatsGrid,
  StatBox,
  GithubLink,
} from "./RepoDetailPage.styles";

const RepoDetailPage = () => {
  const { username, repoName } = useParams();
  const [repoDetail, setRepoDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRepoDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserRepoDetails(username, repoName);
        setRepoDetail(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setRepoDetail(null);
      } finally {
        setLoading(false);
      }
    };
    loadRepoDetails();
  }, [username, repoName]);

  if (loading) return <div>Loading Repo Details...</div>;
  if (error) return <NotFoundPage />;

  return (
    <RepoContainer>
      <h1>{repoDetail.name}</h1>
      <p>{repoDetail.description || "No description provided."}</p>

      <StatsGrid>
        <StatBox>
          <strong>Language:</strong> {repoDetail.language || "N/A"}
        </StatBox>
        <StatBox>
          <strong>Stars:</strong> {repoDetail.stargazers_count}
        </StatBox>
        <StatBox>
          <strong>Forks:</strong> {repoDetail.forks_count}
        </StatBox>
        <StatBox>
          <strong>Open Issues:</strong> {repoDetail.open_issues_count}
        </StatBox>
      </StatsGrid>

      <GithubLink href={repoDetail.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </GithubLink>
    </RepoContainer>
  );
};

export default RepoDetailPage;
