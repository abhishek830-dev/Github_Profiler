// username
export const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};

// Followers
export const fetchUserFollowers = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/followers`,
  );

  if (!response.ok) {
    throw new Error("Followers not found");
  }
  return response.json();
};

// Following
export const fetchUserFollowing = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/following`,
  );

  if (!response.ok) {
    throw new Error("Following not found");
  }
  return response.json();
};

// Repository
export const fetchUserRepository = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );

  if (!response.ok) {
    throw new Error("Repository not found");
  }
  return response.json();
};

// Gists
export const fetchUserGists = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/Gists`,
  );

  if (!response.ok) {
    throw new Error("Gists not found");
  }
  return response.json();
};