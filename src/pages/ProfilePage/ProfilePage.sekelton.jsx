import {
  ProfileContainer,
  ProfileCard,
  ProfileHeader,
  Divider,
  InfoSection,
  InfoGrid,
} from "./ProfilePage.style";
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonGrid,
  SkeletonLine,
  SkeletonStat,
  SkeletonStats,
} from "./ProfilePageSkeleton.style";

const ProfilePageSkeleton = () => {
  return (
    <ProfileContainer>
      <SkeletonButton />

      <ProfileCard>
        <ProfileHeader>
          <SkeletonAvatar />

          <div style={{ flex: 1 }}>
            <Skeleton style={{ width: 240, height: 34 }} />

            <Skeleton
              style={{
                width: 120,
                height: 18,
                marginTop: 12,
              }}
            />

            <Skeleton
              style={{
                width: "100%",
                height: 16,
                marginTop: 24,
              }}
            />

            <Skeleton
              style={{
                width: "85%",
                height: 16,
                marginTop: 12,
              }}
            />
          </div>
        </ProfileHeader>

        <Divider />

        <SkeletonStats>
          <SkeletonStat />
          <SkeletonStat />
          <SkeletonStat />
          <SkeletonStat />
        </SkeletonStats>

        <Divider />

        <InfoSection>
          <InfoGrid>
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonGrid key={index}>
                <SkeletonLine width={70} height={12} />

                <SkeletonLine width="75%" height={18} />
              </SkeletonGrid>
            ))}
          </InfoGrid>
        </InfoSection>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePageSkeleton;
