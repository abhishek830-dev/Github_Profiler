import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "../../hooks/useSearchHistory";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { history } = useSearchHistory();

  return (
    <div>
      <h3>Recent Searches:</h3>
      {history.map((user) => (
        <button key={user} onClick={() => navigate(`/users/${user}`)}>
          {user}
        </button>
      ))}
    </div>
  );
};

export default HomePage;
