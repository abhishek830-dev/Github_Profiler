import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0%{
    background-position:-700px 0;
}

100%{
    background-position:700px 0;
}
`;

export const Skeleton = styled.div`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};

  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};

  border-radius: 8px;

  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%);

  background-size: 1200px 100%;

  animation: ${shimmer} 1.2s linear infinite;
`;

export const SkeletonLine = styled(Skeleton)``;

export const SkeletonStat = styled(Skeleton)`
  width: 72px;
  height: 28px;

  margin: 0 auto;
`;

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
