import styled from "styled-components";

export const HomePageContainer = styled.main`
  max-width: 960px;
  margin: 36px auto;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
`;

export const PageTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 1.35rem;
  color: #15202b;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const HistoryButton = styled.button`
  border: 1px solid #d1d5da;
  background: #f6f8fa;
  color: #24292e;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #e1e4e8;
    transform: translateY(-1px);
  }
`;

export const EmptyMessage = styled.p`
  margin: 0;
  color: #6e7681;
`;