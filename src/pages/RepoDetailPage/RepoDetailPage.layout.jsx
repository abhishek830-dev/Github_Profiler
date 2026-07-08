import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  GitFork,
  CircleDot,
  AlertCircle,
  Eye,
  ExternalLink,
} from "lucide-react";

import { fetchUserRepoDetails } from "../../services/github";

import BackButton from "../../components/common/BackButton";
import NotFoundPage from "../NotFoundPage";

import {
  RepoContainer,
  Card,
  Header,
  RepoTitle,
  RepoDescription,
  Divider,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  InfoSection,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  Footer,
  GithubButton,
  BackWrapper,
} from "./RepoDetailPage.styles";

import RepoDetailSkeleton from "./RepoDetailPage.skeleton";

const RepoDetailPage = () => {
  const { username, repoName } = useParams();

  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRepository = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchUserRepoDetails(username, repoName);

        setRepo(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadRepository();
  }, [username, repoName]);

  useEffect(() => {
    if (!repo) return;

    document.title = `${repo.name} | GitHub Profiler`;
  }, [repo]);

  if (loading) {
    return <RepoDetailSkeleton />;
  }

  if (error || !repo) {
    return <NotFoundPage />;
  }

  return (
    <RepoContainer>
      <BackWrapper>
        <BackButton />
      </BackWrapper>

      <Card>
        <Header>
          <RepoTitle>{repo.name}</RepoTitle>

          <RepoDescription>
            {repo.description || "No description provided."}
          </RepoDescription>
        </Header>

        <Divider />

        <StatsRow>
          <StatCard>
            <StatValue>
              <Star size={18} />
              {repo.stargazers_count}
            </StatValue>

            <StatLabel>Stars</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>
              <GitFork size={18} />
              {repo.forks_count}
            </StatValue>

            <StatLabel>Forks</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>
              <AlertCircle size={18} />
              {repo.open_issues_count}
            </StatValue>

            <StatLabel>Issues</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>
              <Eye size={18} />
              {repo.watchers_count}
            </StatValue>

            <StatLabel>Watchers</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>
              <CircleDot size={18} />
              {repo.language || "—"}
            </StatValue>

            <StatLabel>Language</StatLabel>
          </StatCard>
        </StatsRow>

        <Divider />

        <InfoSection>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Default Branch</InfoLabel>
              <InfoValue>{repo.default_branch}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Visibility</InfoLabel>
              <InfoValue>{repo.visibility}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>License</InfoLabel>
              <InfoValue>{repo.license?.name || "Not specified"}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Repository Size</InfoLabel>
              <InfoValue>{repo.size} KB</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Created</InfoLabel>
              <InfoValue>
                {new Date(repo.created_at).toLocaleDateString()}
              </InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Last Updated</InfoLabel>
              <InfoValue>
                {new Date(repo.updated_at).toLocaleDateString()}
              </InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Last Push</InfoLabel>
              <InfoValue>
                {new Date(repo.pushed_at).toLocaleDateString()}
              </InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Homepage</InfoLabel>
              <InfoValue>
                {repo.homepage ? (
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                    {repo.homepage}
                  </a>
                ) : (
                  "—"
                )}
              </InfoValue>
            </InfoItem>
          </InfoGrid>
        </InfoSection>

        <Footer>
          <GithubButton href={repo.html_url} target="_blank" rel="noreferrer">
            <ExternalLink size={16} />
            <span style={{ marginLeft: 8 }}>View on GitHub</span>
          </GithubButton>
        </Footer>
      </Card>
    </RepoContainer>
  );
};

export default RepoDetailPage;
