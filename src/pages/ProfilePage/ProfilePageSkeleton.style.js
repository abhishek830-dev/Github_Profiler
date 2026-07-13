import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0%{
background-position:-500px 0;
}

100%{
background-position:500px 0;
}
`;

export const Skeleton = styled.div`
  border-radius: 8px;

  background: linear-gradient(90deg, #f1f3f5 25%, #e5e7eb 37%, #f1f3f5 63%);

  background-size: 1000px 100%;

  animation: ${shimmer} 1.3s linear infinite;
`;

export const SkeletonAvatar = styled(Skeleton)`
  width: 132px;
  height: 132px;
  border-radius: 50%;
`;

export const SkeletonButton = styled(Skeleton)`
  width: 110px;
  height: 38px;
  margin-bottom: 20px;
`;

export const SkeletonStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkeletonStat = styled(Skeleton)`
  height: 86px;
`;

export const SkeletonGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkeletonLine = styled(Skeleton)`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};

  height: ${({ height }) => height}px;
`;
