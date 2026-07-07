import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserGists } from "../services/github";
import NotFoundPage from "./NotFoundPage";
import { RepoCard, RepoGrid, RepoPageContainer } from "./RepoPage/RepoPage.style";

const GistsPage = () => {
  const { username } = useParams();
  const [Gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadGists = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchUserGists(username);
        console.log("API se data aaya:", data);
        setGists(data);
        setLoading(false);
      } catch (err) {
        console.log("API se data nhi aaya:", err);
        console.error(err);
        setError(true);
        setGists(null);
      } finally {
        setLoading(false);
      }
    };

    loadGists();
  }, [username]);

  if (loading) return <div>Loading Gists...</div>;
  if (error) return <NotFoundPage />;
  if (!Gists || Gists.length === 0) {
    return <p>{username} don't have any Gists.</p>;
  }

  return (
    <RepoPageContainer>
      <h2>{username}'s Gists:</h2>
      <RepoGrid>
        {Gists.map((gist) => {
          // Gist ke files object se pehli file ka naam nikalna
          const fileNames = Object.keys(gist.files);
          const firstFileName = fileNames[0];

          return (
            <RepoCard key={gist.id}>
              <br />
              <a href={gist.html_url} target="_blank" rel="noreferrer">
                <h3>{firstFileName}</h3>
              </a>

              {/* <Link to={`/users/${username}/gists/${gist.name}`}>
                <h3>{gist.name}</h3>
              </Link> */}
            </RepoCard>
          );
        })}
      </RepoGrid>
    </RepoPageContainer>
  );
};

export default GistsPage;
