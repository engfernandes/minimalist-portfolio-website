"use client";

import { githubClient } from "@/api/github/client";
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";
import lodash from "lodash";
import { useState } from "react";

export function ProjectsList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ["list-repositories"],
    queryFn: async () =>
      await githubClient.repositories.list({
        sort: "created",
        direction: "desc",
        per_page: 4,
        page: 1,
      }),
  });
  const totalRepositories = data?.data?.length;
  const repositories = lodash.chunk(data?.data, 4)[page - 1];

  const handleClickNumber = (page: number) => {
    setPage(page);
  };

  const handleClickPrevious = () => {
    setPage((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="flex flex-col items-start justify-start gap-8 w-full">
      {isLoading && <p>Loading...</p>}
      {isRefetching && <p>Refetching...</p>}
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
            key={index}
          />
        ))}
    </section>
  );
}
