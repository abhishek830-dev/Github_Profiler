import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserFollowing } from "../../services/github";
import NotFoundPage from "../NotFoundPage";

import {
  GridContainer,
  RepoGrid,
  Card,
  CardImage,
  UserLink,
} from "../../components/RepositoryGrid.styles";

const FollowingPage = () => {
  const { username } = useParams();

  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFollowing = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchUserFollowing(username);
        setFollowing(data);
      } catch (err) {
        console.error(err);
        setError(true);
        setFollowing([]);
      } finally {
        setLoading(false);
      }
    };

    loadFollowing();
  }, [username]);

  if (loading) return <div>Loading Following...</div>;
  if (error) return <NotFoundPage />;

  return (
    <GridContainer>
      <h2>{username}'s Following</h2>

      {following.length === 0 ? (
        <p>{username} isn't following anyone.</p>
      ) : (
        <RepoGrid>
          {following.map((user) => (
            <Card key={user.id}>
              <CardImage src={user.avatar_url} alt={user.login} />

              <UserLink to={`/users/${user.login}`}>{user.login}</UserLink>
            </Card>
          ))}
        </RepoGrid>
      )}
    </GridContainer>
  );
};

export default FollowingPage;
