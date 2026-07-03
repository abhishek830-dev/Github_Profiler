import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <Form>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Github Username...."
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchBar;
