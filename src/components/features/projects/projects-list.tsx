"use client";

import { githubClient } from "@/api/github/client";
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";

export function ProjectsList() {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ["list-repositories"],
    queryFn: async () =>
      await githubClient.repositories.list({
        sort: "created",
        direction: "desc",
      }),
  });
  const repositories = data?.data;

  return (
    <section className="flex flex-col items-start justify-start gap-8">
      {isLoading && <p>Loading...</p>}
      {isRefetching && <p>Refetching...</p>}
      {repositories &&
        repositories?.map((repository, index) => (
          <ProjectCard
            title={repository.name}
            description={repository.description}
            date={repository.created_at}
            link={repository.html_url}
            key={index}
          />
        ))}
    </section>
  );
}
