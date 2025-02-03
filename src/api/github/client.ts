import axios from "axios";
import resources from "./resources";

export const githubInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
  ...resources,
});

export const githubClient = { ...resources };
