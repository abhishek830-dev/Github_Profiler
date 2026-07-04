import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserRepoDetails } from "../services/github";
import NotFoundPage from "./NotFoundPage";
import './RepoDetailPage.css';

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
    <div className="repo-container">
      <h1>{repoDetail.name}</h1>
      <p>{repoDetail.description || "No description provided."}</p>

      <div className="stats-grid">
        <p>
          <strong>Language:</strong> {repoDetail.language || "N/A"}
        </p>
        <p>
          <strong>Stars:</strong> {repoDetail.stargazers_count}{" "}
        </p>
        <p>
          <strong>Forks:</strong> {repoDetail.forks_count}{" "}
        </p>
        <p>
          <strong>Open Issues:</strong> {repoDetail.open_issues_count}{" "}
        </p>
      </div>

      <a href={repoDetail.html_url} target="_blank" className="github-link">
        View on GitHub
      </a>
    </div>
  );
};

export default RepoDetailPage;
