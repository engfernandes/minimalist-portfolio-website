import { ProjectsList } from "@/components/features";
import { Button, Typography } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex-col items-start justify-start gap-4 w-max">
        <Typography
          variant="h2"
          className="border-none font-medium"
          text="I build the next web generation"
        />
        <Typography
          variant="p"
          className="text-zinc-600 max-w-[30%]"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Button variant="link" className="p-0">
          Take me to the magic land
        </Button>
      </section>
      <main>
        <ProjectsList />
      </main>
    </>
  );
}
