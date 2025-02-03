"use client";

import { NavigationMenu } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const navigationItems = [
    {
      label: "Projects",
      href: "/projects",
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

  const router = useRouter();

  const handleClickNavigationItem = (href: string) => {
    router.push(href);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-background py-12">
      <div className="flex flex-col items-start justify-center h-full w-fit gap-16">
        <NavigationMenu items={navigationItems} />
        {children}
      </div>
    </div>
  );
}
