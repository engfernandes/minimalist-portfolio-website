"use client";

import { NavigationMenu } from "@/components/ui";

export default function Template({ children }: { children: React.ReactNode }) {
  const navigationItems = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Articles",
      href: "#articles",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-background pt-12 pb-40">
      <div className="flex flex-col items-start justify-center h-full w-[30%] gap-32">
        <NavigationMenu items={navigationItems} />
        {children}
      </div>
    </div>
  );
}
