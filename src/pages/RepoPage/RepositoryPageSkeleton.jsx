import { RepoGrid, RepoCard } from "./RepoPage.style";

import {
  Skeleton,
  SkeletonLine,
  SkeletonFooter,
  SkeletonMeta,
} from "./RepoPageSkeleton.style";

const RepositorySkeleton = () => {
  return (
    <RepoGrid>
      {Array.from({ length: 6 }).map((_, index) => (
        <RepoCard as="div" key={index}>
          <SkeletonLine width="55%" height={22} />

          <SkeletonLine width="100%" height={16} style={{ marginTop: 18 }} />

          <SkeletonLine width="82%" height={16} style={{ marginTop: 10 }} />

          <SkeletonFooter>
            <SkeletonMeta>
              <Skeleton width={70} height={14} />
              <Skeleton width={40} height={14} />
              <Skeleton width={40} height={14} />
            </SkeletonMeta>

            <Skeleton width={90} height={14} />
          </SkeletonFooter>
        </RepoCard>
      ))}
    </RepoGrid>
  );
};

export default RepositorySkeleton;
