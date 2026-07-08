import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchGitHubUser } from "../../services/github";

import NotFoundPage from "../NotFoundPage";
import BackButton from "../../components/common/BackButton";
import {
  ProfileContainer,
  ProfileCard,
  ProfileHeader,
  ProfileAvatar,
  ProfileContent,
  Name,
  Username,
  Bio,
  StatsRow,
  StatCard,
  StatLabel,
  StatValue,
  Divider,
  InfoSection,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  GithubButton,
  Actions,
  BackWrapper,
} from "./ProfilePage.style";
import ProfilePageSkeleton from "./ProfilePage.sekelton";

const ProfilePage = () => {
  const { username } = useParams();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchGitHubUser(username);

        setUserData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [username]);

  useEffect(() => {
    if (!userData) return;

    document.title = userData.name
      ? `${userData.name} (${userData.login}) | GitHub Profiler`
      : `${userData.login} | GitHub Profiler`;
  }, [userData]);

  if (loading) {
    return <ProfilePageSkeleton />;
  }

  if (error || !userData) {
    return <NotFoundPage />;
  }

  return (
    <ProfileContainer>
      <BackWrapper>
        <BackButton />
      </BackWrapper>

      <ProfileCard>
        <ProfileHeader>
          <ProfileAvatar src={userData.avatar_url} alt={userData.login} />

          <ProfileContent>
            <Name>{userData.name || userData.login}</Name>

            <Username>@{userData.login}</Username>

            {userData.bio && <Bio>{userData.bio}</Bio>}
          </ProfileContent>
        </ProfileHeader>

        <Divider />

        <StatsRow>
          <Link
            to={`/users/${username}/followers`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StatCard>
              <StatValue>{userData.followers}</StatValue>
              <StatLabel>Followers</StatLabel>
            </StatCard>
          </Link>

          <Link
            to={`/users/${username}/following`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StatCard>
              <StatValue>{userData.following}</StatValue>
              <StatLabel>Following</StatLabel>
            </StatCard>
          </Link>

          <Link
            to={`/users/${username}/repos`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StatCard>
              <StatValue>{userData.public_repos}</StatValue>
              <StatLabel>Repositories</StatLabel>
            </StatCard>
          </Link>

          <Link
            to={`/users/${username}/gists`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StatCard>
              <StatValue>{userData.public_gists}</StatValue>
              <StatLabel>Gists</StatLabel>
            </StatCard>
          </Link>
        </StatsRow>

        <InfoSection>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Company</InfoLabel>
              <InfoValue>{userData.company || "—"}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>{userData.location || "—"}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Website</InfoLabel>
              <InfoValue>
                {userData.blog ? (
                  <a
                    href={
                      userData.blog.startsWith("http")
                        ? userData.blog
                        : `https://${userData.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {userData.blog}
                  </a>
                ) : (
                  "—"
                )}
              </InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>Joined</InfoLabel>
              <InfoValue>
                {new Date(userData.created_at).toLocaleDateString()}
              </InfoValue>
            </InfoItem>
          </InfoGrid>
        </InfoSection>

        <Divider />

        <Actions>
          <div />

          <GithubButton
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </GithubButton>
        </Actions>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;
