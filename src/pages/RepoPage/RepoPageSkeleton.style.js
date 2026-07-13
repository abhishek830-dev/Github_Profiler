import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0%{
    background-position:-600px 0;
}

100%{
    background-position:600px 0;
}
`;

export const Skeleton = styled.div`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};

  height: ${({ height }) => height}px;

  border-radius: 8px;

  background: linear-gradient(90deg, #f1f3f5 25%, #e5e7eb 37%, #f1f3f5 63%);

  background-size: 1200px 100%;

  animation: ${shimmer} 1.25s linear infinite;
`;

export const SkeletonLine = styled(Skeleton)``;

export const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 22px;
`;

export const SkeletonMeta = styled.div`
  display: flex;
  gap: 12px;
`;
