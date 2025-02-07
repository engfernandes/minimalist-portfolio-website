import { ExperienceCard } from "./experience-card";
import { Typography } from "@/components/ui";
import { prisma } from "@/lib/db";

export async function ExperiencesList() {
  const experiences = await prisma.experience.findMany({
    where: { published: true },
    orderBy: { startDate: "desc" },
    include: {
      company: true,
    },
  });

  return (
    <section
      className="flex flex-col items-start justify-start gap-2 w-full"
      id="experiences"
    >
      <Typography text="Experiences" variant="p" className="font-medium" />
      <section className="flex flex-col items-start justify-start gap-8 w-full">
        {experiences &&
          experiences?.map((experience, index) => (
            <ExperienceCard
              title={experience.title}
              company={experience.company}
              description={
                experience.description ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              dates={
                experience.endDate
                  ? [String(experience.startDate), String(experience.endDate)]
                  : [String(experience.startDate)]
              }
              tags={experience.tags}
              key={index}
            />
          ))}
      </section>
    </section>
  );
}
