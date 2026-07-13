import styled from "styled-components";

export const HomePageContainer = styled.main`
  min-height: calc(100vh - 72px);
  background: #f6f8fa;
  padding: 32px 20px 48px;
`;

export const Content = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

export const Hero = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 6px 12px;
  margin-bottom: 18px;

  background: #f6f8fa;
  border: 1px solid #d8dee4;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 600;
  color: #57606a;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 1.1;

  color: #1f2328;
`;

export const Highlight = styled.span`
  color: #0969da;
`;

export const Subtitle = styled.p`
  margin: 14px 0 28px;

  max-width: 560px;

  font-size: 16px;
  line-height: 1.6;
  color: #656d76;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 14px;

  overflow: hidden;

  transition: 0.2s ease;

  &:focus-within {
    border-color: #0969da;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  height: 54px;
  padding: 0 18px;

  background: transparent;

  font-size: 15px;
  color: #1f2328;

  &::placeholder {
    color: #8c959f;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  height: 54px;
  padding: 0 24px;

  border: none;

  background: #24292f;
  color: #fff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #1b1f24;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  margin-top: 28px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-bottom: 18px;
`;

export const SectionTitle = styled.h2`
  margin: 0;

  font-size: 1.1rem;
  font-weight: 600;

  color: #1f2328;
`;

export const SectionDescription = styled.p`
  margin-top: 4px;

  font-size: 14px;
  color: #656d76;
`;

export const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
`;

export const HistoryCard = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 16px;

  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;

  cursor: pointer;
  text-align: left;

  transition: all 0.18s ease;

  &:hover {
    border-color: #c7d2fe;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  }
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: #edf2f7;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 15px;

  color: #475569;

  flex-shrink: 0;
`;

export const HistoryInfo = styled.div`
  min-width: 0;
  flex: 1;
`;

export const Username = styled.h3`
  margin: 0;

  font-size: 15px;
  font-weight: 600;

  color: #1f2328;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ViewedText = styled.p`
  margin: 4px 0 0;

  font-size: 13px;
  color: #656d76;
`;

export const EmptyState = styled.div`
  background: #fff;
  border: 1px dashed #d0d7de;
  border-radius: 16px;

  padding: 48px 24px;

  text-align: center;
`;

export const EmptyIcon = styled.div`
  font-size: 42px;
  margin-bottom: 14px;
`;

export const EmptyTitle = styled.h3`
  margin: 0 0 8px;

  font-size: 1.2rem;
  color: #1f2328;
`;

export const EmptyDescription = styled.p`
  max-width: 420px;
  margin: 0 auto;

  font-size: 14px;
  line-height: 1.6;

  color: #656d76;
`;

export const ClearButton = styled.button`
  border: none;
  background: transparent;

  color: #0969da;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
