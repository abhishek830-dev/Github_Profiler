/* .grid-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 24px 20px;
}

.grid-container h2 {
    margin: 0 0 18px;
    font-size: 1.35rem;
    color: #24292e;
    letter-spacing: -0.02em;
}

.grid-container p {
    margin-top: 12px;
    color: #57606a;
}

.repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 0;
}

.repo-grid > div,
.card {
    border: 1px solid #d1d5da;
    border-radius: 12px;
    padding: 18px;
    text-align: center;
    background: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 170px;
}

.repo-grid > div:hover,
.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.repo-grid img,
.card img,
.card-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
}

.repo-grid a,
.card a {
    display: block;
    margin-top: 10px;
    color: #0969da;
    font-weight: 600;
    text-decoration: none;
}

.repo-grid a:hover,
.card a:hover {
    text-decoration: underline;
}

.repo-grid p,
.card p {
    color: #6a737d;
    font-size: 13px;
    margin: 4px 0 0;
} */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 20px;

  h2 {
    margin: 0 0 18px;
    font-size: 1.35rem;
    color: #24292e;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 12px;
    color: #57606a;
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #d1d5da;
  border-radius: 12px;
  padding: 18px;
  background: #fff;
  min-height: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const CardLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #0969da;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardText = styled.p`
  color: #6a737d;
  font-size: 13px;
  margin: 4px 0 0;
`;

export const UserLink = styled(Link)`
  display: block;
  margin-top: 10px;
  color: #0969da;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;