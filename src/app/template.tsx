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
    <div className="flex flex-col items-center justify-start h-full w-full bg-background px-24 py-12">
      <NavigationMenu items={navigationItems} />
      <div className="flex-col items-center justify-start h-full w-full my-32 mx-24">
        {children}
      </div>
    </div>
  );
}
