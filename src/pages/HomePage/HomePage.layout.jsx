import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock3, GitBranch } from "lucide-react";
import { useSearchHistory } from "../../hooks/useSearchHistory";

import {
  HomePageContainer,
  Content,
  Hero,   
  Badge,
  Title,
  Highlight,
  Subtitle,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  HistoryGrid,
  HistoryCard,
  Avatar,
  HistoryInfo,
  Username,
  ViewedText,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
} from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();
  const inputRef = useRef < HTMLInputElement > null;

  const { history } = useSearchHistory();

  const [username, setUsername] = useState("");

  useEffect(() => {
    document.title = "GitHub Profiler";
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    const value = username.trim();

    if (!value) return;

    navigate(`/users/${value}`);
  };

  return (
    <HomePageContainer>
      <Content>
        <Hero>
          <Badge>
            <GitBranch size={16} />
            GitHub Profiler
          </Badge>

          <Title>
            Discover any <Highlight>GitHub Developer</Highlight>
          </Title>

          <Subtitle>
            Search GitHub usernames, explore developer profiles, repositories,
            followers, contributions and more—all in one place.
          </Subtitle>

          <SearchWrapper>
            <Search
              size={20}
              style={{
                marginLeft: 22,
                color: "#6e7781",
                flexShrink: 0,
              }}
            />

            <SearchInput
              ref={inputRef}
              value={username}
              placeholder="Search GitHub username..."
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </SearchWrapper>
        </Hero>

        <Section>
          <SectionHeader>
            <div>
              <SectionTitle>Recent Searches</SectionTitle>

              <SectionDescription>
                Quickly jump back to recently viewed GitHub profiles.
              </SectionDescription>
            </div>
          </SectionHeader>

          {history.length > 0 ? (
            <HistoryGrid>
              {history.map((user) => (
                <HistoryCard
                  key={user}
                  onClick={() => navigate(`/users/${user}`)}
                >
                  <Avatar>{user.charAt(0).toUpperCase()}</Avatar>

                  <HistoryInfo>
                    <Username>{user}</Username>

                    <ViewedText>
                      <Clock3
                        size={13}
                        style={{
                          display: "inline",
                          marginRight: 6,
                          verticalAlign: "-2px",
                        }}
                      />
                      Recently viewed
                    </ViewedText>
                  </HistoryInfo>
                </HistoryCard>
              ))}
            </HistoryGrid>
          ) : (
            <EmptyState>
              <EmptyIcon>🔍</EmptyIcon>

              <EmptyTitle>No recent searches</EmptyTitle>

              <EmptyDescription>
                Start by searching for a GitHub username. Your recently viewed
                profiles will appear here for quick access.
              </EmptyDescription>
            </EmptyState>
          )}
        </Section>
      </Content>
    </HomePageContainer>
  );
};

export default HomePage;
