import styled from "styled-components";

export const ProfileContainer = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 24px 48px;
`;

export const ProfileCard = styled.section`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  padding: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px;
  }
`;

export const ProfileAvatar = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid #d0d7de;
`;

export const ProfileContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
`;

export const Username = styled.p`
  margin: 6px 0 18px;
  font-size: 1rem;
  color: #6b7280;
`;

export const Bio = styled.p`
  margin: 0;
  max-width: 700px;
  line-height: 1.7;
  color: #374151;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #edf1f4;
  border-bottom: 1px solid #edf1f4;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  padding: 22px;
  text-align: center;
  transition: background 0.18s ease;

  &:not(:last-child) {
    border-right: 1px solid #edf1f4;
  }

  &:hover {
    background: #fafbfc;
  }

  @media (max-width: 768px) {
    &:nth-child(odd) {
      border-right: 1px solid #edf1f4;
    }

    &:nth-child(-n + 2) {
      border-bottom: 1px solid #edf1f4;
    }
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
  padding: 28px 32px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 36px;

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
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #9ca3af;
`;

export const InfoValue = styled.div`
  color: #111827;
  font-size: 15px;
  line-height: 1.6;

  a {
    color: #2563eb;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #edf1f4;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
    align-items: stretch;
  }
`;

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 42px;
  padding: 0 18px;

  border-radius: 10px;
  border: 1px solid #d0d7de;

  background: #111827;
  color: #ffffff;

  text-decoration: none;
  font-weight: 600;
  font-size: 14px;

  transition: 0.18s ease;

  &:hover {
    background: #000;
  }
`;

export const BackWrapper = styled.div`
  margin-bottom: 20px;
`;
