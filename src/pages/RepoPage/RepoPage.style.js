import styled from "styled-components";
import { Link } from "react-router-dom";

export const RepoPageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 48px;
`;

export const Header = styled.div`
  margin: 20px 0 28px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  color: #6b7280;
  font-size: 15px;
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 18px;
`;

export const RepoCard = styled(Link)`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: inherit;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;

  padding: 20px;

  transition: 180ms ease;

  &:hover {
    border-color: #c7d2fe;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  }
`;

export const RepoName = styled.h3`
  margin: 0;
  font-size: 17px;
  color: #2563eb;
`;

export const RepoDescription = styled.p`
  margin: 12px 0 18px;

  color: #6b7280;
  line-height: 1.6;
  font-size: 14px;

  flex: 1;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RepoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  gap: 12px;

  font-size: 13px;
  color: #6b7280;
`;

export const RepoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f59e0b;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;

  border: 1px dashed #d1d5db;
  border-radius: 14px;

  color: #6b7280;
`;
