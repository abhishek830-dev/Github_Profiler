import { SearchBar } from "../features/search/SearchBar";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <h1>Github Profiler</h1>
      </Link>
      <div className="search-wrapper">
      <SearchBar />
      </div>
    </header>
  );
};
