import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "../../hooks/useSearchHistory";
import {HomePageContainer, Card, PageTitle, HistoryList, HistoryButton, EmptyMessage} from "./HomePage.styles";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { history } = useSearchHistory();

  return (
    <HomePageContainer>
      <Card>
        <PageTitle>Recent Searches</PageTitle>
        {history.length > 0 ? (
          <HistoryList>
            {history.map((user) => (
              <HistoryButton key={user} onClick={() => navigate(`/users/${user}`)}>
                {user}
              </HistoryButton>
            ))}
          </HistoryList>
        ) : (
          <EmptyMessage>No recent searches yet. Start by searching a GitHub username above.</EmptyMessage>
        )}
      </Card>
    </HomePageContainer>
  );
};

export default HomePage;
