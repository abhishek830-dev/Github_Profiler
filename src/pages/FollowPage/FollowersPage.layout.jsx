import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserFollowers } from "../../services/github";
import NotFoundPage from "../NotFoundPage";

import {
  GridContainer,
  RepoGrid,
  Card,
  CardImage,
  UserLink,
} from "../../components/RepositoryGrid.styles";

const FollowerPage = () => {
  const { username } = useParams();

  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFollower = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchUserFollowers(username);
        setFollowers(data);
      } catch (err) {
        console.error(err);
        setError(true);
        setFollowers([]);
      } finally {
        setLoading(false);
      }
    };

    loadFollower();
  }, [username]);

  if (loading) return <div>Loading Followers...</div>;
  if (error) return <NotFoundPage />;

  return (
    <GridContainer>
      <h2>{username}'s Followers</h2>

      {followers.length === 0 ? (
        <p>{username} doesn't have any followers.</p>
      ) : (
        <RepoGrid>
          {followers.map((follower) => (
            <Card key={follower.id}>
              <CardImage src={follower.avatar_url} alt={follower.login} />

              <UserLink to={`/users/${follower.login}`}>
                {follower.login}
              </UserLink>
            </Card>
          ))}
        </RepoGrid>
      )}
    </GridContainer>
  );
};

export default FollowerPage;
