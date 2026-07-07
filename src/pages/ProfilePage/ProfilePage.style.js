import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #d1d5da;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProfileAvatar = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 2px solid #0366d6;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 24px;
`;

export const ProfileStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  background: #f6f8fa;
  padding: 15px;
  border-radius: 8px;
`;