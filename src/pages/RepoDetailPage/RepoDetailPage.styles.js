import styled from "styled-components";

export const RepoContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 32px 24px 56px;
`;

export const Card = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 32px;
`;

export const RepoTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.03em;
`;

export const RepoDescription = styled.p`
  margin: 16px 0 0;
  color: #57606a;
  line-height: 1.7;
  font-size: 15px;
`;

export const Divider = styled.div`
  height: 1px;
  background: #edf1f4;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  padding: 22px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid #edf1f4;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #edf1f4;
  }
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
`;

export const StatLabel = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: #6b7280;
`;

export const InfoSection = styled.div`
  padding: 32px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 42px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
  font-weight: 600;
`;

export const InfoValue = styled.div`
  font-size: 15px;
  color: #111827;
  line-height: 1.6;
`;

export const Footer = styled.div`
  padding: 24px 32px;
  border-top: 1px solid #edf1f4;
`;

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  padding: 0 18px;

  border-radius: 10px;

  background: #111827;
  color: white;

  text-decoration: none;
  font-weight: 600;

  transition: 0.18s ease;

  &:hover {
    background: #000;
  }
`;

export const BackWrapper = styled.div`
  margin-bottom: 20px;
`;
