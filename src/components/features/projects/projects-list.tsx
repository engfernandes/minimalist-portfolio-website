"use client";

import { githubClient } from "@/api/github/client";
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";
import { Typography } from "@/components/ui";

export function ProjectsList() {
  const { data, isLoading } = useQuery({
    queryKey: ["list-repositories"],
    queryFn: async () =>
      await githubClient.repositories.list({
        sort: "created",
        direction: "desc",
        per_page: 4,
        page: 1,
      }),
  });
  const repositories = data?.data;

  return (
    <section
      className="flex flex-col items-start justify-start gap-2 w-full"
      id="projects"
    >
      <Typography
        text="Selected Projects"
        variant="p"
        className="font-medium"
      />
      <section className="flex flex-col items-start justify-start gap-8 w-full">
        {repositories &&
          repositories?.map((repository, index) => (
            <ProjectCard
              title={repository.name}
              description={
                repository.description ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              date={repository.created_at}
              link={repository.html_url}
              isLoading={isLoading}
              key={index}
            />
          ))}
      </section>
      <Typography
        text="View all projects ->"
        variant="p"
        className="font-medium"
      />
    </section>
  );
}
