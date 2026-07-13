import {
  RepoContainer,
  Card,
  Header,
  Divider,
  StatsRow,
  StatCard,
  InfoSection,
  InfoGrid,
  Footer,
  BackWrapper,
} from "./RepoDetailPage.styles";

import BackButton from "../../components/common/BackButton";

import {
  Skeleton,
  SkeletonLine,
  SkeletonStat,
  SkeletonInfo,
} from "./RepoDetailPage.skeleton.styles";

const RepoDetailSkeleton = () => {
  return (
    <RepoContainer>
      <BackWrapper>
        <BackButton />
      </BackWrapper>

      <Card>
        <Header>
          <SkeletonLine width={320} height={34} />

          <SkeletonLine width="100%" height={16} style={{ marginTop: 22 }} />

          <SkeletonLine width="82%" height={16} style={{ marginTop: 10 }} />
        </Header>

        <Divider />

        <StatsRow>
          {Array.from({ length: 5 }).map((_, index) => (
            <StatCard key={index}>
              <SkeletonStat />

              <SkeletonLine width={70} height={14} style={{ marginTop: 12 }} />
            </StatCard>
          ))}
        </StatsRow>

        <Divider />

        <InfoSection>
          <InfoGrid>
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonInfo key={index}>
                <SkeletonLine width={80} height={12} />

                <SkeletonLine width="75%" height={18} />
              </SkeletonInfo>
            ))}
          </InfoGrid>
        </InfoSection>

        <Divider />

        <Footer>
          <Skeleton width={170} height={44} />
        </Footer>
      </Card>
    </RepoContainer>
  );
};

export default RepoDetailSkeleton;
