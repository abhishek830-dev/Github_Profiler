import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUserFollowers } from '../services/github';


const FollowerPage = () => {
    const {username} = useParams();
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchUserFollowers(username)
            .then((data) => {
                setFollowers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [username]);

    if (loading) return <div>Loading Followers...</div>
    
    return (
        <div>
            <h2>{username} ke Followers:</h2>
            {followers.map((follower) => (
                <div key={follower.id}>
                    <img src={follower.avatar_url} width="50" alt={follower.login} />
                    <Link to={`/users/${follower.login}`}>
                    {follower.login}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FollowerPage;