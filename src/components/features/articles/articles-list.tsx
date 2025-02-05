"use client";

import { Typography } from "@/components/ui";

export function ArticlesList() {
  return (
    <section
      className="flex flex-col items-start justify-start gap-2 w-full"
      id="articles"
    >
      <Typography text="Articles" variant="p" className="font-medium" />
      <section className="flex flex-col items-start justify-start gap-8 w-full">
        <Typography text="Coming soon..." />
      </section>
      {/* <Typography
        text="View all projets ->"
        variant="p"
        className="font-medium"
      /> */}
    </section>
  );
}
