import { SearchBar } from "../features/search/SearchBar.layout.jsx"; 
import { FaGithub } from "react-icons/fa";
import { HeaderContainer, Logo } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <FaGithub size={28} />
        <h1>GitHub Profiler</h1>
      </Logo>
      <div className="search-wrapper">
        <SearchBar />
      </div>
    </HeaderContainer>
  );
};
