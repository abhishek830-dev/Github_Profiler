import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 24px;

  height: 64px;
  padding: 0 24px;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid #edf1f4;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 16px;
  }

  @media (max-width: 640px) {
    height: auto;
    flex-wrap: wrap;
    padding: 12px 16px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  flex-shrink: 0;

  text-decoration: none;
  color: #111827;

  svg {
    flex-shrink: 0;
  }

  h1 {
    margin: 0;

    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.03em;

    @media (max-width: 640px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  flex: 1;
  min-width: 0;

  max-width: 520px;

  margin-left: auto;

  @media (max-width: 640px) {
    order: 3;

    flex: 0 0 100%;
    max-width: 100%;

    margin-left: 0;
  }

  form {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    height: 42px;

    box-sizing: border-box;

    padding: 0 16px 0 44px;

    border: 1px solid #d0d7de;
    border-radius: 10px;

    background: #f6f8fa;

    color: #1f2328;
    font-size: 14px;

    transition: all 0.18s ease;
  }

  input::placeholder {
    color: #8c959f;
  }

  input:focus {
    outline: none;

    background: #fff;

    border-color: #0969da;

    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.08);
  }

  button {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;

  left: 14px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #8c959f;

  pointer-events: none;

  z-index: 2;

  svg {
    width: 16px;
    height: 16px;
  }
`;
