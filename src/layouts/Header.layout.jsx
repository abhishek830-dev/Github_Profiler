import { FaGithub } from "react-icons/fa";
import { Search } from "lucide-react";

import { SearchBar } from "../features/search/SearchBar.layout";

import {
  HeaderContainer,
  Logo,
  SearchWrapper,
  SearchIcon,
} from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <FaGithub size={28} />
        <h1>GitHub Profiler</h1>
      </Logo>

      <SearchWrapper>
        <SearchIcon>
          <Search size={16} strokeWidth={2} />
        </SearchIcon>

        <SearchBar />
      </SearchWrapper>
    </HeaderContainer>
  );
};
