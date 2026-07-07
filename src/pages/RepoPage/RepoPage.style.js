import styled from "styled-components";

export const RepoPageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const RepoCard = styled.div`
  background: #fff;
  border: 1px solid #d1d5da;
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-top: 0;
    color: #0366d6;
  }

  p {
    color: #57606a;
    margin: 10px 0;
  }
`;