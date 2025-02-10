import { ProjectCard } from "./project-card";
import { Typography } from "@/components/ui";
import { prisma } from "@/lib/db";

export async function ProjectsList() {
  const projects = await prisma.project.findMany({
    take: 4,
    orderBy: {
      endDate: "desc",
    },
    include: {
      company: true,
    },
  });

  return (
    <section
      className="flex flex-col items-start justify-start gap-1 w-full"
      id="projects"
    >
      <Typography text="Selected Projects" variant="h3" className="font-bold" />
      <section className="flex flex-col items-start justify-start gap-2 w-full">
        {projects &&
          projects?.map((project, index) => (
            <ProjectCard
              title={project.title}
              description={
                project.description ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              dates={
                project.endDate
                  ? [String(project.startDate), String(project.endDate)]
                  : [String(project.startDate)]
              }
              link={project.url!}
              isLoading={!projects}
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
