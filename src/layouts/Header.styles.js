import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #e1e4e8;
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #24292e;
    font-weight: 600;
  }

  .logo h1 {
    margin: 0;
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  .search-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-left: 24px;
  }

  form {
    display: flex;
    width: 100%;
    max-width: 640px;
    min-width: 280px;
  }

  input {
    flex: 1;
    padding: 9px 12px;
    border: 1px solid #d1d5da;
    border-radius: 6px;
    outline: none;
    background-color: #f6f8fa;
    color: #24292e;
  }

  input:focus {
    border-color: #0969da;
    background-color: #fff;
  }

  button {
    padding: 9px 14px;
    border: 1px solid #0969da;
    border-radius: 6px;
    background-color: #0969da;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
  }

  button:hover {
    background-color: #035fc4;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #24292e;

  h1 {
    margin: 0;
    font-size: 18px;
    letter-spacing: -0.02em;
  }
`;