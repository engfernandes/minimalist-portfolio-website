import { ProjectsList } from "@/components/features";
import { Button, Typography } from "@/components/ui";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-start justify-center gap-4 w-fit">
        <Typography
          variant="h2"
          className="border-none font-medium"
          text="I build the next web generation"
        />
        <Typography
          variant="p"
          className="text-zinc-600 w-full"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Button variant="link" className="font-bold p-0">
          Take me to the magic land
        </Button>
      </section>
      <main>
        <ProjectsList />
      </main>
    </>
  );
}
