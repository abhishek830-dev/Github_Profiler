import styled from "styled-components";

export const RepoContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #d1d5da;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 20px 0;
`;

export const StatBox = styled.div`
  background: #f6f8fa;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #e1e4e8;
  text-align: center;
`;

export const GithubLink = styled.a`
  display: block;
  background: #24292e;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
`;
