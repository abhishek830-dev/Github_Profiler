import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "../hooks/useSearchHistory";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const {history, addSearch} = useSearchHistory();

  // const handleSearch = () => {
  //   if (username.trim()) {
  //     addSearch(username);  //save in the search history
  //     navigate(`/users/${username}`); // Redirect it

  //   }
  // };
  return (
    <div>
      {/* <h1>Search Github Profile</h1>

      <input
        type="text"
        placeholder="Enter the Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button> */}

      <div>
        <h3>Recent Searches:</h3>
        {history.map((user) => (
          <button key={user} onClick={() => navigate(`/users/${user}`)}>
            {user}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
