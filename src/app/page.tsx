import {
  ArticlesList,
  ProjectsList,
  Contact,
  ExperiencesList,
} from "@/components/features";
import { Button, Typography } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-start justify-center gap-4 w-fit"
        id="about"
      >
        <div className="rounded-full overflow-hidden p-4 bg-zinc-50 mb-2">
          <Image
            src="/images/hi.png"
            alt="avatar"
            height={100}
            width={100}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
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
      <main className="flex flex-col items-start justify-start gap-16 w-full">
        <ProjectsList />
        <ArticlesList />
        <ExperiencesList />
      </main>
      <Contact />
    </>
  );
}
