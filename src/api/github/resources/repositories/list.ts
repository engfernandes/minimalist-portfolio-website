import { githubInstance } from "../../client";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  created_at: string;
}

interface Params {
  page?: number;
  per_page?: number;
  sort?: "created" | "updated" | "pushed" | "full_name";
  direction?: "asc" | "desc";
}

export async function list(params: Params) {
  return await githubInstance.get<Repository[]>("/users/engfernandes/repos", {
    params,
  });
}
