import { githubapi } from "./api";

// username
export const fetchGitHubUser = async (username) => {
  const { data } = await githubapi.get(`/users/${username}`);
  return data;
};

// Followers
export const fetchUserFollowers = async (username) => {
  const { data } = await githubapi.get(`/users/${username}/followers?per_page=100`);
  return data;
};

// Following       
export const fetchUserFollowing = async (username) => {
  const { data } = await githubapi.get(`/users/${username}/following?per_page=100`);
  return data;
};

// Repository
export const fetchUserRepository = async (username) => {
  const { data } = await githubapi.get(`/users/${username}/repos?per_page=100`);
  return data;
};

// Gists
export const fetchUserGists = async (username) => {
  const { data } = await githubapi.get(`/users/${username}/gists?per_page=100`);
  return data;
};

// RepoDetails
export const fetchUserRepoDetails = async (username, repoName) => {
  const { data } = await githubapi.get(`/repos/${username}/${repoName}`);
  return data;
};