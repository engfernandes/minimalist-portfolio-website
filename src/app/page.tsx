import { ProjectsList, Contact, ExperiencesList } from "@/components/features";
import { Button, Typography } from "@/components/ui";

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-start justify-center gap-4 w-fit"
        id="about"
      >
        <Typography
          variant="h2"
          className="border-none font-extrabold tracking-wide"
          text="I'm building the next web generation"
        />
        <Typography
          variant="p"
          className="text-zinc-600 w-full"
          text="I dedicated my last years to learn and master the art of web and blockchain development. I'm a full-stack engineer with a passion for innovative products and technologies."
        />
        <Button variant="link" className="font-bold p-0 tracking-wider">
          Contact me
        </Button>
      </section>
      <main className="flex flex-col items-start justify-start gap-16 w-full">
        <ProjectsList />
        {/* <ArticlesList /> */}
        <ExperiencesList />
      </main>
      <Contact />
    </>
  );
}
