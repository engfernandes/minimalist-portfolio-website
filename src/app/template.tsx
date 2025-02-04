"use client";

import { NavigationMenu } from "@/components/ui";

export default function Template({ children }: { children: React.ReactNode }) {
  const navigationItems = [
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-background py-12">
      <div className="flex flex-col items-start justify-center h-full w-[30%] gap-16">
        <NavigationMenu items={navigationItems} />
        {children}
      </div>
    </div>
  );
}
