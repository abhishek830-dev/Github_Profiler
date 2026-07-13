import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const githubapi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
  },
});

export default githubapi;
