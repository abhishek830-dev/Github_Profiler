import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import { useSearchHistory } from "../../hooks/useSearchHistory";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const {addSearch} = useSearchHistory(); 
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
    addSearch(input);
      navigate(`/users/${input}`); // Direct profile page pr le jao
      setInput(""); //search bar clean kr do
    }
  };
  return (
    <Form onSubmit={handleSearch}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search globally Github Username...."
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchBar;